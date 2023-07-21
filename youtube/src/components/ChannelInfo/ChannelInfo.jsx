import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContex';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () => youtube.channelImageURL(id), { staleTime: 1000 * 60 * 5 });
  console.log('url:', url);
  return (
    <div className="flex gap-2 items-center my-2 mb-8">
      <img className="rounded-full w-12 h-12" src={url} alt={name} />
      <p className="font-bold text-lg">{name}</p>
    </div>
  );
}
