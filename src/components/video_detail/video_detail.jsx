import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        id='ytplayer'
        title='youtube video'
        type='text/html'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
      <h2>{video.snippet.channelTitle}</h2>
      <pre className={styles.pre}>{video.snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
