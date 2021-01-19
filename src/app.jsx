import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoHeader from './components/video_header/video_header';
import VideoList from './components/video_list/video_list';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const ytvideos = await youtube.mostPopular();
        setVideos(ytvideos);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, [youtube]);

  const searchTerm = async (term) => {
    const ytvideos = await youtube.searchYoutube(term);
    setVideos(ytvideos);
    setSearchedVideo(null);
  };

  const onClickVideo = (video) => {
    setSearchedVideo(video);
  };

  return (
    <div className={styles.app}>
      <VideoHeader searchTerm={searchTerm}></VideoHeader>
      <div className={styles.content}>
        {searchedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={searchedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onClickVideo={onClickVideo}
            display={searchedVideo ? 'onePerLine' : 'twoPerLine'}
          ></VideoList>
        </div>
      </div>
    </div>
  );
};

export default App;
