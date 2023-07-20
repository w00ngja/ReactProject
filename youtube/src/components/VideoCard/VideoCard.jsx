import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`/videos/watch/${video.id}`);
  };

  const channelTitle = video.snippet.channelTitle;
  const ogDate = new Date(video.snippet.publishedAt);
  const date = ogDate.getFullYear() + '.' + ogDate.getMonth() + '.' + ogDate.getDate();

  return (
    <div onClick={handleClick} key={video.id} className="bg-gray-200 w-52 rounded-lg flex flex-col p-2 cursor-pointer">
      <img className="rounded-lg" alt="" src={video.snippet.thumbnails.default.url} />
      <span className="font-bold py-1">{`${video.snippet.title.slice(0, 33)}...`}</span>
      <span className="font-light text-sm">{`${channelTitle}∙${date}`}</span>
    </div>
  );
}
