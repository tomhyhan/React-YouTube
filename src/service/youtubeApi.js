import axios from 'axios';

class YouTubeApi {
  constructor(key) {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      timeout: 1000,
      params: {
        key: key,
      },
    });
  }

  mostPopular = async () => {
    try {
      const response = await this.httpClient.get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 24,
        },
      });
      return response.data.items;
    } catch (err) {
      console.log('errer', err);
    }
  };

  searchYoutube = async (term) => {
    try {
      const response = await this.httpClient.get('search', {
        params: {
          part: 'snippet',
          maxResults: 24,
          q: term,
          type: 'video',
        },
      });
      const videoList = response.data.items.map((video) => {
        return { ...video, id: video.id.videoId };
      });
      return videoList;
    } catch (err) {
      console.log('errer', err);
    }
  };
  // try {
  //   const response = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${term}&type=video&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result = await response.json();
  //   const videosList = result.items.map((video) => {
  //     return { ...video, id: video.id.videoId };
  //   });
  //   return videosList;
  // } catch (err) {
  //   return console.log('error', err);
  // }
}
// }

export default YouTubeApi;
