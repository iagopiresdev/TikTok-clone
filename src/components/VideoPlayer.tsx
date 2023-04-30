import "./VideoPlayer.css";
import { useRef, useState } from "react";
import { VideoProps } from './types/VideoProps';
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function VideoPlayer({
  likes,
  messages,
  shares,
  name,
  description,
  music,
  url,
}: VideoProps) {

  // Referência para o elemento de vídeo e estado para controlar a reprodução
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlay] = useState(false);

  // Função que inicia ou pausa a reprodução do vídeo
  function handleStart() {
    videoRef.current?.paused ? videoRef.current?.play() : videoRef.current?.pause();
    setPlay((prevState) => !prevState);
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