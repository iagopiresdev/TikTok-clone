import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './assets/components/Video';
import db from "./config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, 'videos');
    const videoSnapshot = await getDocs(videosCollection);
    const videoList: any = videoSnapshot.docs.map(doc => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

 return (
    <div className="app">
      <div className="app_videos">
        {video.map((item:any) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
