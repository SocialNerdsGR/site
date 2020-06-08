import React from "react";
import { Link } from "gatsby";
import useLockBodyScroll from "../../helpers/useLockBodyScroll";

const Drawer = ({ setMenuOpen, navItems }) => {
  useLockBodyScroll();
  return (
    <div className={`drawer`}>
      <ul className={`drawer__items`} onClick={() => setMenuOpen(false)}>
        {navItems.map((item, index) => (
          <li className={`navigation__item drawer__item `} key={index}>
            <Link className={`navigation__link drawer__link `} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
