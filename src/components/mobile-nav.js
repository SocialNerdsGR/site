import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "./logo";
import Burger from "./mobile-navigation/burger";
import Drawer from "./mobile-navigation/drawer";

const MobileNav = ({ scroll, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={`mobile-nav ${scroll && `scroll`}`}>
        <Link to="/">
          <Logo />
        </Link>
        <Burger toggleMenu={toggleMenu} open={menuOpen} />
      </div>
      {menuOpen ? (
        <Drawer setMenuOpen={setMenuOpen} navItems={navItems} />
      ) : null}
    </>
  );
};

export default MobileNav;
