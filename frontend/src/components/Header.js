import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

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

const CartButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Captions</Logo>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">Features</NavItem>
        <NavItem href="#">Videos</NavItem>
        <NavItem href="#">Captions</NavItem>
        <NavItem href="#">Blog</NavItem>
      </Nav>
      <CartButton>
        <FaShoppingCart /> Buy Now
      </CartButton>
    </HeaderWrapper>
  );
}

export default Header;