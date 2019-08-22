import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Media from "react-media";

import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

const navItems = [
  { name: "About", link: "#nerds" },
  { name: "YouTube", link: "#youtube" },
  { name: "Training", link: "#training" },
];

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
`;

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const savedHandler = useRef();

  const handler = useCallback(() => {
    setScroll(window.scrollY);
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
    <HeaderWrapper>
      <Media query="(min-width: 481px) and (max-width: 767px)">
        {matches =>
          !matches ? (
            <DesktopNav scroll={scroll} navItems={navItems} />
          ) : (
            <MobileNav scroll={scroll} navItems={navItems} />
          )
        }
      </Media>
    </HeaderWrapper>
  );
};

export default Header;
