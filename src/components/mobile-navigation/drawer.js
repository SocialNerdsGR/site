import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import useScrollMount from '../../helpers/useLockScroll';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  z-index: 1000;
  color: red;
`;
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  list-style: none;
  height: 100%;
`;
const NavLink = styled.a`
  color: #555;
  text-decoration: none;
`;
const NavItem = styled.li`
  color: #555;
  font-size: 1.5rem;
  line-height: 2rem;
  text-decoration: none;
`;
const RouterLink = styled(Link)`
  color: #555;
  text-decoration: none;
`;


const Drawer = ({ setMenuOpen, navItems }) => {
  useScrollMount();
  return (
    <Wrapper>
      <Nav onClick={() => setMenuOpen(false)}>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink href={item.link}>{item.name}</NavLink>
          </NavItem>
        ))}
        <NavItem key={4}>
          <RouterLink to={"/workshops"}>Workshops</RouterLink>
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Drawer;
