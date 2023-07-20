import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard/VideoCard';

import { useYoutubeApi } from '../context/YoutubeApiContex';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <div className="">
      <div>{keyword ? `'${keyword}' 검색 결과` : `최신 트렌드`}</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Something is Wrong!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </div>
  );
}
