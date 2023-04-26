import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { pauseVideo } from "../../store/video/videoActions";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import { VideoProps } from './types/VideoProps';
import "./video.css";

function VideoPlayer({
  likes,
  messages,
  shares,
  name,
  description,
  music,
  url,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.video.isPlaying);

  useEffect(() => {
        if (videoRef.current) {
      videoRef.current.pause();
      dispatch(pauseVideo());
    }
  }, [url, dispatch]);

  function handleStart() {
    if (isPlaying) {
      videoRef.current?.pause();
      dispatch(pauseVideo());
    } else {
      videoRef.current?.play();
      dispatch(pauseVideo()); // Update this line to an appropriate action for playing video
    }
  }

  return (
    <div className="video">
      <video className="video_player" ref={videoRef} onClick={handleStart} loop src={url} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter {...{ name, description, music }} />
    </div>
  );
}

export default VideoPlayer;

