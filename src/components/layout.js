import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import Social from "./social";
import Header from "./header";
import "./layout.css";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 20px;
    scroll-behavior: smooth;
  }
  
  html {
    overflow-x: hidden;
  }
`;


const Footer = styled.footer`
  text-align: center;
  padding: 5px;
  font-size: 0.9rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main">{children}</main>
      <Social />
      <Footer>Copyright © {new Date().getFullYear()}, SocialNerds</Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
