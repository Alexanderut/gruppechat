import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../Madier/Bilder/logo.png"
 


// Nav component
function Nav() {
  return (
    <Navbar>
      <NavItem>
        <Link to="/"><img src={logo} alt="logo for side" className='logo'/> </Link>
      </NavItem>
      <NavItem>
        <Link to="/brukere">Brukere</Link>
        <Link to="/om">Om</Link>
      </NavItem>
      <NavItem>
        <Link to="/login">Login</Link>
        <Link to="/registrer">Registrer</Link>
      </NavItem>
    </Navbar>
  );
}

export default Nav;

// Styled components
const Navbar = styled.nav`
  background-color: #403075;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .logo{
    height:50px;
    filter: brightness(0) invert(1);

  }
`;

const NavItem = styled.div`
  color: #90305A;
  a {
    color: #ABA1CE;
    font-size:18px;
    font-weight:bold ;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;