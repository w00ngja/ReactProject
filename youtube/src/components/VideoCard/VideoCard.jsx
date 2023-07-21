import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../../util/date';

export default function VideoCard({ video, type }) {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const isList = type === 'list';

  return (
    <li
      onClick={handleClick}
      key={video.id}
      className={isList ? 'flex gap-2 m-2 ' : '' && `bg-gray-200 w-full rounded-lg flex flex-col p-2 cursor-pointer`}
    >
      <img className={isList ? 'w-60' : 'w-full' && `rounded-lg w-full`} alt={title} src={thumbnails.medium.url} />
      <div>
        <p className="font-bold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
