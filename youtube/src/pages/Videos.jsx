import React from "react";
import VideoSm from "../components/video-sm/VideoSm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    console.log("fetching..");
    return axios.get(`data/videoKeyword.json`).then((res) => res.data.items);
  });

  return <div>{keyword ? `'${keyword}' 검색 결과` : `최신 트렌드`}</div>;
}
