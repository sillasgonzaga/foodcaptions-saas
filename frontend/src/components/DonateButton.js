import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const DonateButtonWrapper = styled.a`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e85a2d;
  }
`;

function DonateButton() {
  return (
    <DonateButtonWrapper 
      href="https://buy.stripe.com/7sI2aG5S575maoodQQ" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaShoppingCart /> Donate
    </DonateButtonWrapper>
  );
}

export default DonateButton;