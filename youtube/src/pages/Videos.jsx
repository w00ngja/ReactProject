import React from 'react';
import VideoSm from '../components/video-sm/VideoSm';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return (
    <div className="">
      <div>{keyword ? `'${keyword}' 검색 결과` : `최신 트렌드`}</div>
    </div>
  );
}
