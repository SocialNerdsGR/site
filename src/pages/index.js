import React from "react";
import Media from "react-media";
import styled from "styled-components";

import Layout from "../components/layout";
import Nerds from "../sections/nerds";
import Contact from "../sections/contact";
import Videos from "../sections/videos";
import LogoImage from "../components/logo-image";

import SEO from "../components/seo";
import "../index.css";

const Circle = styled.div`
  z-index: -1000;
  position: absolute;
  background: rgba(24, 162, 222, 0.6);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden; 
`;

const TopCircle = styled(Circle)`
  bottom: calc(100% - 360px);
  left: calc(100% - 150px);
`;

const BottomCircle = styled(Circle)`
  top: calc(100% - 280px);
  left: -150px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HireButton = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #18a2de;
  border-radius: 100px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
      <Media
        query="(min-width: 1281px)"
        render={() => (
          <>
            <TopCircle/>
            <BottomCircle/>
          </>
        )}
      />

      <LogoWrapper>
        <LogoImage/>
        <HireButton href="/#training">
          Hire us
        </HireButton>
      </LogoWrapper>
      <Nerds/>
      <Videos/>
      <Contact/>
    </Layout>
  );
};

export default IndexPage;
