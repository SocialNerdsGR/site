import React, { useState, useEffect, useRef, useCallback } from "react";

import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

const navItems = [
  { name: "About", link: "/#nerds" },
  { name: "YouTube", link: "/#youtube" },
  { name: "Training", link: "/#training" },
];

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const savedHandler = useRef();

  const handler = useCallback(() => {
    setScroll(window.scrollY > 0);
  }, [setScroll]);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = event => savedHandler.current(event);

    document.addEventListener("scroll", eventListener);
    return () => {
      document.removeEventListener("scroll", eventListener);
    };
  }, []);

  return (
    <nav className={`navigation`}>
      <MobileNav scroll={scroll} navItems={navItems} />
      <DesktopNav scroll={scroll} navItems={navItems} />
    </nav>
  );
};

export default Header;
