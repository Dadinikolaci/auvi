"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const CommentsPanel = ({ projectId }: { projectId: string }) => {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: true });
      if (data) {
        setComments(data);
      }
    };

    fetchComments();

    const channel = supabase
      .channel(`comments:${projectId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
        setComments((prev) => [...prev, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId]);

  const handlePostComment = async () => {
    if (!newComment.trim()) return;
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    const { error } = await supabase.from('comments').insert({
      text: newComment,
      author_email: user?.email,
      project_id: projectId,
    });

    if (!error) {
      setNewComment('');
    }
    setLoading(false);
  };

  return (
    <aside className="flex w-96 flex-col border-l border-solid border-l-[#242424] bg-[#1A1A1A]">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {comments.map(comment => (
            <div key={comment.id} className="flex gap-3">
              <div className="flex-1">
                <p className="text-sm font-bold">{comment.author_email}</p>
                <p className="text-sm text-gray-300 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-3 border-t border-solid border-t-[#242424] p-4 bg-[#1A1A1A]">
        <div className="flex-1">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <div className="flex justify-end mt-2">
            <Button onClick={handlePostComment} disabled={loading}>
              {loading ? 'Posting...' : 'Post'}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CommentsPanel;
