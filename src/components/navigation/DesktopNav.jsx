import React from "react";
import { Link } from "gatsby";
import Logo from "../logo";

const DesktopNav = ({ navItems }) => (
  <div className={`desktop-nav`}>
    <div className={`container`}>
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
    </div>
  </div>
);

export default DesktopNav;
