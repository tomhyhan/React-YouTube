import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YouTubeApi from './service/youtubeApi';
// connect compenent(JS) with HTML using react-dom

const youtube = new YouTubeApi(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
//sd
