import React from "react";
import VideoSm from "../components/video-sm/VideoSm";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FakeSearch from "../api/fakeSearch";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
    // 컴포넌트에서 비동기 통신관련 로직을 분리하였음 (Fake / Real)
  } = useQuery(["videos", keyword], () => {
    // 클래스화하여 내부 메서드를 호출해주었음
    const youtube = new FakeSearch();
    return youtube.search(keyword);
  });

  return (
    <>
      <div>{keyword ? `'${keyword}' 검색 결과` : `최신 트렌드`}</div>
      {isLoading && <p>Loading..</p>}
      {error && <p>Error Detection</p>}

      {videos && (
        <div className="flex flex-wrap">
          {videos.map((video) => {
            console.log(video);
            return <VideoSm key={video.id} video={video}></VideoSm>;
          })}
        </div>
      )}
      <div></div>
    </>
  );
}
