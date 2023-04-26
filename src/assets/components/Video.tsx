import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import { VideoProps } from './types/VideoProps';
import "./video.css";

// Definição do componente VideoPlayer
function VideoPlayer({
  likes ,
  messages,
  shares,
  name,
  description,
  music,
  url,
}: VideoProps) {
  // Referência para o elemento de vídeo e seu estado
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlay] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlay(false);
    }
  }, [url]);

  // Função que inicia ou pausa a reprodução do vídeo
  function handleStart() {
    // Se o vídeo estiver pausado, inicia a reprodução, caso contrário, pausa a reprodução
    if (playing) {
      videoRef.current?.pause();
      setPlay(false);
    } else {
      videoRef.current?.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      {/* Elemento de vídeo */}
      <video className="video_player" ref={videoRef} onClick={handleStart} loop src={url} />
      {/* Componente VideoSidebar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {/* Componente VideoFooter */}
      <VideoFooter {...{ name, description, music }} />
    </div>
  );
}

export default VideoPlayer;

// Path: src/assets/components/VideoFooter.tsx