import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const mockComments = [
  {
    id: 1,
    author: 'Anna Kowalsky',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvYWrIsvuhnO6EhW8r8CdCe7jZqHwNJnBseEloI7BNEzquiJcNOmbxlDDoUrckO1CAICht8qqWk_WLAlDOj0O2KuCVBP9xJgbsaLGnCl2xGd6eI2RBDIE7oXdNiejP8ZWufLXcheD4ru11tqDHBBzcVP0-Eu_uiJ_2aBa-9szphZzmNBnvKxwHgh7wAHVqMNNKADWhVxJALyb0DERnW0I9A-Q78NOwlTgoGd3gogTObs_avfW7YreSOl3Tt8v04gDbadxyCdeEnBu1',
    timestamp: '00:48',
    status: 'Needs Change',
    statusColor: 'yellow',
    text: 'Can we adjust the color grading in this scene? It feels a bit too cold.',
    replies: [
      {
        id: 1,
        author: 'Mark Johnson',
        avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbffVqod_jShR8CDgHXB3qL5q66rhZ9AkqU9XIJD55IwDTrgghrcYc7FIHwP-Eyger9YwRHvJyoltZrt5QzovgX9B3ZHHJCyia-whuRrje-B0ONaCRTBFSEcVyJOejJFtPhvkQIk8H5UVhKPx9xcu-Fj4A6qDOsNdzqFm33xiXmj5rwATXXwYohVWLFBV1UUIz3oJ0jEe7l9CAwPCxx2M-NMtmOCPxjExet-JayNE1yGa-sKTMq9IZKVIvda8JbkyAh_wpqjH1o5Bn',
        text: "Good point. I'll warm it up a bit and send over a new version.",
      }
    ]
  },
  {
    id: 2,
    author: 'Mark Johnson',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJvLo7ec-VBxwlmgfAKu0SbkzZ34Tw9W8Qg4CUAkW0ML9Uyl4DXP8ExhbL9BFFfN4zyURUvCZGwkGUT5S329f5EdFCnSNP_tC8x9AU9r96lHnHiZ6sLu8jKYM5qwwvD4pBg7hXti5TVAepBNxd4HLCwGkr6lFc65kRWKsA3-5bnrNGgQRW2UCAbmJo7OuqgB6_VYevNg_q4BNIDGpgO2__Se8-9nsWfqUVqO9ySaL-wbxMfWTJOHtueRKCPPF07r1iGrh-XV5GFIdY',
    timestamp: '01:32',
    status: 'Resolved',
    statusColor: 'green',
    text: 'The audio sounds great here. Approved.',
    replies: []
  }
];

const CommentsPanel = () => {
  return (
    <aside className="flex w-96 flex-col border-l border-solid border-l-[#242424] bg-[#1A1A1A]">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Filters */}
        <div className="flex gap-2 mb-4">
          <Button variant="secondary" className="bg-primary/20 text-primary">All</Button>
          <Button variant="secondary" className="bg-[#242424] hover:bg-[#333]">Resolved</Button>
          <Button variant="secondary" className="bg-[#242424] hover:bg-[#333]">Unresolved</Button>
        </div>
        {/* Comment List */}
        <div className="flex flex-col gap-4">
          {mockComments.map(comment => (
            <div key={comment.id} className="flex gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" style={{ backgroundImage: `url("${comment.avatarUrl}")` }}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold">{comment.author}</p>
                    <a className="text-xs text-primary font-medium hover:underline" href="#">{comment.timestamp}</a>
                  </div>
                  <span className={`rounded px-2 py-0.5 text-xs font-medium ${comment.statusColor === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>{comment.status}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{comment.text}</p>
                {/* Replies */}
                {comment.replies.map(reply => (
                  <div key={reply.id} className="flex gap-3 mt-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0" style={{ backgroundImage: `url("${reply.avatarUrl}")` }}></div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{reply.author}</p>
                      <p className="text-sm text-gray-300 mt-1">{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Composer */}
      <div className="flex items-start gap-3 border-t border-solid border-t-[#242424] p-4 bg-[#1A1A1A]">
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOz6Eq7OWS-O8mbBv_w0it2IAp8F8UB-RUpTBIshQ3wIBdPJl5nffqcyQPvtypsbP9JdxZE1KEjowqoG_ApATgF-Me1V5-xFAnniic1MbESNQI9AhsMehLTZBfBj-_0e0UMGnNJH4wXJM8o47DKYC7HHlUkKOmiG0a6MxidGWAvRYDOxvqX7G5K2eEFwmWw4Gl0yh7omYOZlT0F-kqd8YlD0KJnZ-vYyY2-rawPo8PXGEQNVaMVbvamxBzJBuIKwttPaQ7idMFQtjK')" }}></div>
        <div className="flex-1">
          <Textarea className="form-textarea flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-[#242424] h-20 placeholder:text-gray-400 px-4 py-2 text-sm font-normal" placeholder="Add a comment at 01:32..."></Textarea>
          <div className="flex justify-end mt-2">
            <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-black text-sm font-bold">
              <span className="truncate">Post</span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CommentsPanel;
