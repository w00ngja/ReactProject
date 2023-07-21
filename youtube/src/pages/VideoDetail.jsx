import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import ChannelInfo from '../components/ChannelInfo/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos/RelatedVideos';

export default function VideoDetail() {
  // 불러온 State를 읽어들임
  const {
    state: { video },
  } = useLocation();

  const { id } = useParams();
  const { title, channelTitle, channelId, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:px-4">
      <article className="basis-4/6">
        <iframe
          title={video.snippet.title}
          id={id}
          type="text/html"
          width="100%"
          height={640}
          src={`http://www.youtube.com/embed/${id}`}
          frameborder="0"
        ></iframe>
        <div className="w-full flex flex-col flex-wrap p-8 pt-2">
          <h1 className="text-2xl font-bold my-3 text-dp">{title}</h1>

          {/* 기존 검색 API에는 채널 썸네일 정보가 없기 때문에, 별도의 요청을 관리하는 컴포넌트 분리 */}
          <ChannelInfo name={channelTitle} id={channelId} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={id} />
      </section>
    </section>
  );
}
