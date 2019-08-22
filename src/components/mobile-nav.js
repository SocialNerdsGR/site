import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "./logo";
import Burger from "./mobile-navigation/burger";
import Drawer from "./mobile-navigation/drawer";

const NavigationBar = styled.div`
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: 0.9rem;
  font-family: "Roboto";
  color: #555;
  ${({ scroll }) =>
  scroll > 0 && `
  -webkit-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  `}
`;

const MobileNav = ({ scroll, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <NavigationBar scroll={scroll}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Logo/>
      </Link>
      <Burger toggleMenu={toggleMenu}/>
      {menuOpen ? (
        <Drawer setMenuOpen={setMenuOpen} navItems={navItems} />
      ) : null}
    </NavigationBar>
  );
};

export default MobileNav;
