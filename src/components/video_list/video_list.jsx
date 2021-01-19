import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onClickVideo, display }) => {
  return (
    <ul className={styles.list}>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            onClickVideo={onClickVideo}
            display={display}
          ></VideoItem>
        );
      })}
    </ul>
  );
};

export default VideoList;
