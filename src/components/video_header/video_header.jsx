import React, { useRef } from 'react';
import styles from './video_header.module.css';

const VideoHeader = ({ searchTerm }) => {
  const inputRef = useRef();

  const handleSearchTerm = () => {
    const term = inputRef.current.value;
    searchTerm(term);
    inputRef.current.value = '';
  };

  const onSubmitSearchTerm = (event) => {
    event.preventDefault();
    handleSearchTerm();
  };

  const onKeyPressSearchTerm = (event) => {
    event.key === 'enter' && handleSearchTerm();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <img
          className={styles.logo}
          src='/images/logo.png'
          alt='youtube logo'
        />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <form className={styles.form} onSubmit={onSubmitSearchTerm}>
        <input
          ref={inputRef}
          onKeyPress={onKeyPressSearchTerm}
          className={styles.input}
          type='text'
          placeholder='Search...'
        />
        <button className={styles.button} type='submit'>
          <img
            className={styles.buttonImg}
            src='/images/search.png'
            alt='search icon'
          />
        </button>
      </form>
    </header>
  );
};

export default VideoHeader;
