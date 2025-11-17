"use client";

import React from 'react';
import { useAnnotationStore } from '@/lib/store';

const AnnotationToolbar = () => {
  const { tool, setTool } = useAnnotationStore();

  const tools = [
    { name: 'arrow', icon: 'arrow_outward' },
    { name: 'rectangle', icon: 'rectangle' },
    { name: 'text', icon: 'title' },
  ] as const;

  return (
    <aside className="flex flex-col items-center gap-2 border-r border-solid border-r-[#242424] bg-[#1A1A1A] p-3">
      {tools.map((t) => (
        <button
          key={t.name}
          onClick={() => setTool(t.name === tool ? null : t.name)}
          className={`p-3 rounded-lg ${tool === t.name ? 'bg-primary/20 text-primary' : 'text-[#E0E0E0] hover:bg-primary/20 hover:text-primary'}`}
        >
          <span className="material-symbols-outlined">{t.icon}</span>
        </button>
      ))}
      <div className="mt-4 border-t border-[#242424] pt-4 flex flex-col items-center gap-2">
        <div className="size-6 rounded-full bg-primary cursor-pointer border-2 border-white"></div>
        <div className="w-full text-center text-xs text-gray-400 mt-2">10px</div>
      </div>
    </aside>
  );
};

export default AnnotationToolbar;
