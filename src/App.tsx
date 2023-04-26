import React from 'react';
import './App.css';
import Video from './assets/components/Video';
import { VideoProps } from './assets/components/types/VideoProps';
import { useVideos } from './assets/components/hooks/useVideos';

function AppContainer() {
  const videos = useVideos();

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map((video: VideoProps) => (
          <Video          
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

// Path: src/assets/components/hooks/useVideos.tsx