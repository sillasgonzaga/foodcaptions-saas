import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

function VideoInput({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        label="YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <StyledButton type="submit" variant="contained" color="primary">
        Convert
      </StyledButton>
    </Form>
  );
}

export default VideoInput;