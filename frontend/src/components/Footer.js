import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>
        &copy; 2024 FoodCaptions. All rights reserved. Write your feedback to{' '}
        <a href="https://twitter.com/sillastg" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          @sillastg
        </a> on Twitter/X.
      </p>
    </FooterWrapper>
  );
}


export default Footer;