import React from 'react';
import styled from 'styled-components';
import DonateButton from './DonateButton';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>FoodCaptions</Logo>
      <DonateButton />
    </HeaderWrapper>
  );
}

export default Header;