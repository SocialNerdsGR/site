import React from "react";

import Layout from "../components/layout";
import Nerds from "../sections/nerds";
import Contact from "../sections/contact";
import Videos from "../sections/videos";

import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />

      <div className="circle top" />
      <div className="circle bottom" />

      <div className={`intro flex`}>
        <h1>We will help you to skyrocket your career</h1>
        <h2>Learn how to write production ready applications</h2>
        <div className="actions">
          <a className={`workshops`} href="#training">
            Workshops
          </a>
          <a className={`mentoring`} href="#training">
            Mentoring
          </a>
        </div>
      </div>
      <Nerds />
      <Videos />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
