import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import Container from "../Container";

const DesktopNav = ({ navItems }) => (
  <div className={`desktop-nav`}>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={`navigation__items`}>
        {navItems.map((item, index) => (
          <li className={`navigation__item`} key={index}>
            <Link className={`navigation__link`} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </div>
);

export default DesktopNav;
