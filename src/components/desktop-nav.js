import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./logo";

const NavigationBar = styled.div`
  padding: 10px 0;
  font-size: 0.9rem;
  font-family: "Roboto";
  color: #555;
  ${({ scroll }) =>
    scroll > 0 &&
    `
  -webkit-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  `}
`;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Nav = styled.ul`
  float: right;
`;

const NavItem = styled.li`
  display: inline,
  margin-right: 10,
  color: #555;
  display: inline-block;
  text-decoration: none;
  margin-right: 10px;
  &:hover:after {
    transform: scaleX(1);
  }
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #18a2de;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
`;

const NavLink = styled.a`
  color: #555;
  display: inline-block;
  text-decoration: none;
`;

const RouterLink = styled(Link)`
  color: #555;
  display: inline-block;
  text-decoration: none;
`;

const DesktopNav = ({ scroll, navItems }) => (
  <NavigationBar scroll={scroll}>
    <Wrapper>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Logo />
      </Link>
      <Nav>
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
  </NavigationBar>
);

export default DesktopNav;
