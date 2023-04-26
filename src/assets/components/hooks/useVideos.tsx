import { useState, useEffect } from 'react';
import db from "../../../config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import { VideoProps } from '../types/VideoProps';

export const useVideos = () => {
  const [videos, setVideos] = useState<VideoProps[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      const videosCollection = collection(db, 'videos');
      const videoSnapshot = await getDocs(videosCollection);
      const videoList: VideoProps[] = videoSnapshot.docs.map(doc => doc.data() as VideoProps);
      setVideos(videoList);
    };
    getVideos();
  }, []);
  return videos;
};
