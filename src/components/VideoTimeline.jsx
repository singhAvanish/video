import React, { useEffect, useRef, useState } from 'react';
import './VideoTimeline.css';



const VideoTimeline = ({ videoFile, trimStart, trimEnd, onTrimChange, thumbnail,videoSrc }) => {
  const timelineRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoFile) {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(videoFile);
      video.onloadedmetadata = () => {
        setDuration(video.duration);
      };
    }
  }, [videoFile]);

  const handleTimelineClick = (event) => {
    if (!timelineRef.current) return;
    const { left, width } = timelineRef.current.getBoundingClientRect();
    const clickX = event.clientX - left;
    const percentage = clickX / width;
    const time = percentage * duration;
    if (time < trimStart) {
      onTrimChange(time, trimEnd);
    } else if (time > trimEnd) {
      onTrimChange(trimStart, time);
    }
  };
  

  return (
    <div className="video-timeline" ref={timelineRef} onClick={handleTimelineClick}>
      <video src={videoSrc} controls />
      <div className="trim-start" style={{ left: (trimStart / duration) * 100 + '%' }}></div>
      <div className="trim-end" style={{ left: (trimEnd / duration) * 100 + '%' }}></div>
      <img src={thumbnail} alt="Video Thumbnail" />
    </div>
  );
};

export default VideoTimeline;
