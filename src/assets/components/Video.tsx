import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar"; // <--- This is the line that is causing the error
import "./video.css";


function Video({likes, messages, shares, username, description, music, url}:any){
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
                src={url}
                //src="https://cdn.discordapp.com/attachments/764337208844222525/1089904310659338331/InShot_20230327_162807719.mp4"
                ></video>
            <VideoSidebar 
                likes = {likes}
                messages = {messages}
                shares = {shares}
            />
            <VideoFooter 
                username = {username}
                description = {description}
                music = {music}
            />
        </div>
    );
}

export default Video;