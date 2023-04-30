import React from 'react';
import './App.css';
import VideoPlayer  from "./components/VideoPlayer";
import { VideoProps } from './components/types/VideoProps';
import { useVideos } from './components/hooks/usevideos';

function AppContainer() {
  const videos = useVideos();

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video: VideoProps) => (
          <VideoPlayer
            description={video.description}
            likes={video.likes}
            messages={video.messages}
            music={video.music}
            name={video.name}
            shares={video.shares}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default AppContainer;
