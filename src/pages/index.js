import React from "react";

import Layout from "../components/layout";
import Nerds from "../sections/nerds";
import Contact from "../sections/contact";
import Videos from "../sections/videos";

import SEO from "../components/seo";

import "../index.css";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="container">
        <div>
          <h1 className="title">
            <span className="socialnerds">
              <span className="social">Social</span>
              <span className="nerds">Nerds</span>
            </span>
          </h1>
          <div className="hire-container">
            <a className="hire" href="#training">
              Hire us
            </a>
          </div>
        </div>
      </div>
      <Nerds />
      <Videos />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
