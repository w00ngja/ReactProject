import React from "react";

export default function VideoSm({ video }) {
  return <div className="bg-dp m-1 w-40">{video.snippet.title}</div>;
}
