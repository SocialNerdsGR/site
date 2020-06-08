import React from "react";

import MobileNav from "./navigation/MobileNav";
import DesktopNav from "./navigation/DesktopNav";

const navItems = [
  { name: "Workshops", link: "/#workshops" },
  { name: "About", link: "/#nerds" },
  { name: "YouTube", link: "/#youtube" },
  { name: "Hire us", link: "/#hire-us" },
];

const Header = () => {
  return (
    <nav className={`navigation`}>
      <MobileNav navItems={navItems} />
      <DesktopNav navItems={navItems} />
    </nav>
  );
};

export default Header;
