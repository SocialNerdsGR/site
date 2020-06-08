import React, { useState } from "react";
import { Link } from "gatsby";

import Logo from "../Logo";
import Burger from "./Burger";
import Drawer from "./Drawer";

const MobileNav = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={`mobile-nav`}>
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
