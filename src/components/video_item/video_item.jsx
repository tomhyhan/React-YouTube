import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, onClickVideo, display }) => {
  const handleOnClickVideo = () => {
    onClickVideo(video);
  };
  const displayList =
    display === 'onePerLine' ? styles.onePerLine : styles.twoPerLine;
  return (
    <li
      className={`${styles.video} ${displayList}`}
      onClick={handleOnClickVideo}
    >
      <div className={styles.content}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.medium.url}
          alt='youtube thumbnail'
        />
        <div>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
