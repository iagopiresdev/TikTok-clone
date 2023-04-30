import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';

function VideoSidebar({likes, messages, shares}:any) {
    const [liked, setLike] = useState(false);

    function handdlelike(){
        setLike(!liked);
    }

    return (
    <div className='videoSidebar'>
        <div className='videoSidebar__options' onClick={handdlelike}>
            { liked ? <FavoriteSharpIcon fontSize='large'/> : <FavoriteBorderSharpIcon fontSize='large'/>}
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__options'>
            <MessageSharpIcon fontSize='large'/>
            <p>{ messages }</p>
        </div>
        <div className='videoSidebar__options'>
            <IosShareSharpIcon fontSize='large'/>
            <p>{ shares }</p>
        </div>
    </div>
  )
}

export default VideoSidebar;