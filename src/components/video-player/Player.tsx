"use client";

import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { fabric } from 'fabric';
import { useAnnotationStore } from '@/lib/store';
import { supabase } from '@/lib/supabaseClient';

interface PlayerProps {
  videoUrl: string;
  projectId: string;
}

const Player = ({ videoUrl, projectId }: PlayerProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState({ played: 0, playedSeconds: 0, loaded: 0, loadedSeconds: 0 });
  const [duration, setDuration] = useState(0);
  const { tool } = useAnnotationStore();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabricRef.current = canvas;

    const handleResize = () => {
      const playerWrapper = canvasRef.current?.closest('.aspect-video');
      if (playerWrapper) {
        canvas.setWidth(playerWrapper.clientWidth);
        canvas.setHeight(playerWrapper.clientHeight);
        canvas.renderAll();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let isDrawing = false;
    let startX = 0;
    let startY = 0;
    let currentShape: fabric.Object | null = null;

    canvas.on('mouse:down', (o) => {
      if (!tool) return;
      isDrawing = true;
      const pointer = canvas.getPointer(o.e);
      startX = pointer.x;
      startY = pointer.y;

      switch (tool) {
        case 'rectangle':
          currentShape = new fabric.Rect({
            left: startX,
            top: startY,
            width: 0,
            height: 0,
            stroke: 'red',
            strokeWidth: 2,
            fill: 'transparent',
          });
          break;
        case 'arrow':
          // For simplicity, we'll draw a line for the arrow body
          currentShape = new fabric.Line([startX, startY, startX, startY], {
            stroke: 'red',
            strokeWidth: 2,
          });
          break;
        case 'text':
          const text = new fabric.IText('Type here...', {
            left: startX,
            top: startY,
            fill: 'red',
            fontSize: 20,
          });
          canvas.add(text);
          canvas.setActiveObject(text);
          text.enterEditing();

          text.on('editing:exited', async () => {
            if (playerRef.current) {
              const timestamp = playerRef.current.getCurrentTime();
              const annotationData = text.toObject();

              const { error } = await supabase.from('annotations').insert({
                project_id: projectId,
                timestamp: timestamp,
                tool: 'text',
                data: annotationData,
              });

              if (error) {
                console.error('Error saving text annotation:', error);
              }
            }
          });

          isDrawing = false;
          break;
      }
      if (currentShape) {
        canvas.add(currentShape);
      }
    });

    canvas.on('mouse:move', (o) => {
      if (!isDrawing || !tool || !currentShape) return;
      const pointer = canvas.getPointer(o.e);

      switch (tool) {
        case 'rectangle':
          (currentShape as fabric.Rect).set({
            width: pointer.x - startX,
            height: pointer.y - startY,
          });
          break;
        case 'arrow':
          (currentShape as fabric.Line).set({ x2: pointer.x, y2: pointer.y });
          break;
      }
      canvas.renderAll();
    });

    canvas.on('mouse:up', async (o) => {
      if (isDrawing && currentShape && tool && playerRef.current) {
        const timestamp = playerRef.current.getCurrentTime();
        const annotationData = currentShape.toObject();

        const { error } = await supabase.from('annotations').insert({
          project_id: projectId,
          timestamp: timestamp,
          tool: tool,
          data: annotationData,
        });

        if (error) {
          console.error('Error saving annotation:', error);
        }
      }
      isDrawing = false;
      currentShape = null;
    });

    // Load existing annotations
    const loadAnnotations = async () => {
      const { data, error } = await supabase
        .from('annotations')
        .select('data')
        .eq('project_id', projectId);

      if (error) {
        console.error('Error fetching annotations:', error);
        return;
      }

      if (data && data.length > 0) {
        const objects = data.map(item => item.data);
        fabric.util.enlivenObjects(objects, (enlivenedObjects: fabric.Object[]) => {
          enlivenedObjects.forEach(obj => {
            canvas.add(obj);
          });
          canvas.renderAll();
        }, 'fabric');
      }
    };

    loadAnnotations();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.dispose();
    };
  }, [tool, projectId]);

  const handlePlayPause = () => setPlaying(!playing);
  const handleProgress = (state: any) => setProgress(state);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const date = new Date(seconds * 1000);
    const mm = String(date.getUTCMinutes()).padStart(2, '0');
    const ss = String(date.getUTCSeconds()).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  return (
    <div className="relative w-full max-w-7xl aspect-video bg-gray-900 rounded-lg overflow-hidden group">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={playing}
        onProgress={handleProgress}
        onDuration={setDuration}
        controls={false}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" onClick={handlePlayPause}>
        <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/50 text-white backdrop-blur-sm">
          <span className="material-symbols-outlined !text-4xl">{playing ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-3">
          <p className="text-white text-xs font-medium">{formatTime(progress.playedSeconds)}</p>
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={progress.played}
            onInput={(e) => playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value))}
            className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #3EA6FF ${progress.played * 100}%, #fff5 ${progress.played * 100}%)`}}
          />
          <p className="text-white text-xs font-medium">{formatTime(duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
