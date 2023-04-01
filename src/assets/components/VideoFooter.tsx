import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({username, description, music}:any){
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{username}</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <div className="videoFooterMusic__text">
                        <p>Music title</p>
                    </div>
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}

export default VideoFooter;