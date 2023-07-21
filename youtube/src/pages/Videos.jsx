import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard/VideoCard';

import { useYoutubeApi } from '../context/YoutubeApiContex';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), { staleTime: 1000 * 60 * 1 });

  return (
    <>
      <div className="w-full text-center text-xl font-bold my-3 text-dp">
        {keyword ? `🔎 '${keyword}' 검색 결과` : `🔥 최신 트렌드`}
      </div>
      <div className="px-3">
        {isLoading && <p>Loading..</p>}
        {error && <p>Something is Wrong!</p>}
        {videos && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-3 gap-y-4">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video}></VideoCard>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
