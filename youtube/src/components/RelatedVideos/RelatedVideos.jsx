import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContex';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../VideoCard/VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id));

  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Something is Wrong!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
