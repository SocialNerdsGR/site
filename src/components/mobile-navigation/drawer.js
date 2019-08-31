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
            <a className={`link`} href={item.link}>{item.name}</a>
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
