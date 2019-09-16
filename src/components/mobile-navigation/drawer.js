import React from "react";
import { Link } from "gatsby";

import useScrollMount from '../../helpers/useLockScroll';

const Drawer = ({ setMenuOpen, navItems }) => {
  useScrollMount();
  return (
    <div className={`drawer`}>
      <ul className={`items`} onClick={() => setMenuOpen(false)}>
        {navItems.map((item, index) => (
          <li className={`item`} key={index}>
            <Link className={`link`} to={item.link}>{item.name}</Link>
          </li>
        ))}
        <li className={`item`} key={4}>
          <Link className={`link`} to={"/workshops"}>Workshops</Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
