import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoSm({ video }) {
  const title = video.snippet.title;
  const image = video.snippet.thumbnails.default.url;
  const channelTitle = video.snippet.channelTitle;
  const ogDate = new Date(video.snippet.publishedAt);
  const date = ogDate.getFullYear() + '.' + ogDate.getMonth() + '.' + ogDate.getDate();

  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`/videos/watch/${video.id}`);
  };

  return (
    <div
      onClick={handleClick}
      key={video.id}
      className="bg-gray-200 rounded-lg m-1 w-56 flex flex-col p-3 cursor-pointer"
    >
      <img className="rounded-lg" alt="" src={image} />
      <span className="font-bold py-1">{`${title.slice(0, 18)}...`}</span>
      <span className="font-light text-sm">{`${channelTitle}∙${date}`}</span>
    </div>
  );
}
