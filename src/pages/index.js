import React from "react";

import Layout from "../components/layout";
import Nerds from "../sections/nerds";
import Contact from "../sections/contact";
import Videos from "../sections/videos";
import LogoImage from "../components/logo-image";

import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>

      <div className="circle top"/>
      <div className="circle bottom"/>

      <div className={`logo-wrapper`}>
        <div className={`flex`}>
          <LogoImage/>
          <a className={`hire`} href="#training">
            Hire us
          </a>
        </div>
      </div>
      <Nerds/>
      <Videos/>
      <Contact/>
    </Layout>
  );
};

export default IndexPage;
