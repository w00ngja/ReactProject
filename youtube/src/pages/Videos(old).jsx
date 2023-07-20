import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard/VideoCard';

import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    // const youtube = new FakeYoutube();
    const youtube = new Youtube();
    return youtube.search(keyword);
  });
  // [1] fetch의 단점
  // 1. 받아오는 파일을 json 변환해주어야 함
  // 2. 백엔드 상에서 받아오는 실패한 데이터(404,400 등)도 통신에 성공한 것으로 인식
  // return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
  // .then((res) => res.json())
  // .then((data) => data.items);

  // [2] 따라서, Axios 라이브러리를 활용해볼 것
  // return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`).then((res) => res.data.items);

  // [3] Mock data와 Real data의 원활한 변환을 위헤, 가독성을 위해 따로 분리한다. (=>youtube.js)
  // 그래서 useQeury에는 캐싱데이터, 콜백, 캐싱전략만 직관적으로 확인할 수 있게 구성하는 것이 좋다.

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
