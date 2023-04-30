import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

interface VideoFooterProps {
  name: string;
  description: string;
  music: string;
}

function VideoFooter({ name, description, music }: VideoFooterProps) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="Record" />
    </div>
  );
}

export default VideoFooter;
