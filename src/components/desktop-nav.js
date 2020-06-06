import React from "react";
import { Link } from "gatsby";
import Logo from "./logo";

const DesktopNav = ({ scroll, navItems }) => (
  <div className={`desktop-nav ${scroll && `scroll`}`}>
    <div className={`container`}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={`navigation__items`}>
        {navItems.map((item, index) => (
          <li className={`item`} key={index}>
            <Link className={`link`} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default DesktopNav;
