import axios from 'axios';

class YouTubeApi {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  };

  searchYoutube = async (term) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${term}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      const videosList = result.items.map((video) => {
        return { ...video, id: video.id.videoId };
      });
      return videosList;
    } catch (err) {
      return console.log('error', err);
    }
  };
}

export default YouTubeApi;
