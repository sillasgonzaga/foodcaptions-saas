import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  && {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  }
`;

function DonateButton() {
  const handleDonate = () => {
    // Implement donation logic here
    console.log('Donate button clicked');
  };

  return (
    <StyledButton
      variant="contained"
      color="secondary"
      onClick={handleDonate}
    >
      Donate
    </StyledButton>
  );
}

export default DonateButton;