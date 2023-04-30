import { useState, useEffect } from "react";
import { VideoProps } from "../types/VideoProps";
import db from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

export const useVideos = (): VideoProps[] => {
    const [videos, setVideos] = useState<VideoProps[]>([]);
  
    useEffect(() => {
      const getVideos = async () => {
        try {
          const videosCollection = collection(db, 'videos');
          const videoSnapshot = await getDocs(videosCollection);
          const videoList: VideoProps[] = videoSnapshot.docs.map(doc => doc.data() as VideoProps);
          setVideos(videoList);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      };
      getVideos();
    }, []);

    return videos;
};
