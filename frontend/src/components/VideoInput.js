import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { processVideo } from '../store/recipeSlice';

function VideoInput() {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(processVideo(url));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button type="submit">Process Video</button>
    </form>
  );
}

export default VideoInput;