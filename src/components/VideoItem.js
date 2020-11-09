import React from 'react'
import './styling/VideoItem.css'

const VideoItem = ({ videoInfo, onVideoSelect}) => {
    
    return (
    <div  onClick={() => onVideoSelect(videoInfo)} className='video-item item'>
        <img className='ui image' src={videoInfo.snippet.thumbnails.medium.url} alt={videoInfo.snippet.title} />
        <div className='content'>
            <div className='header'>{videoInfo.snippet.title}</div>
        </div>
    </div>
    )
};

export default VideoItem;