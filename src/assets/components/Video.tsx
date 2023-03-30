import React, { useRef, useState } from "react";
import "./video.css";

function Video(){
    const videoRef:any = useRef(null);
    const [playing, setPlay] = useState(false);

    function handleStart(){
        if(playing){
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video
                className="video_player"
                ref={videoRef}
                onClick={handleStart}
                loop
                src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
                //src="https://cdn.discordapp.com/attachments/764337208844222525/1089904310659338331/InShot_20230327_162807719.mp4"
            ></video>
        </div>
    );
}

export default Video;