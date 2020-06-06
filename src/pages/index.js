import React from "react";

import Layout from "../components/layout";
import Nerds from "../sections/nerds";
import Contact from "../sections/contact";
import Videos from "../sections/videos";
import Workshops from "../sections/workshops";

import SEO from "../components/seo";
import Section from "../components/section";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />

      <div className="circle top" />
      <div className="circle bottom" />

      <div className={`intro flex`}>
        <h1>
          We will <span>help</span> you to skyrocket your <span>product</span>
        </h1>
        <h2>We take software seriously</h2>
        <div className="actions">
          <a
            className={`workshops-link`}
            target="_blank"
            rel="noreferrer"
            href="https://socialnerdsgr.eventbrite.com"
          >
            Workshops
          </a>
          <a className={`hire-us-link`} href="#hire-us">
            Hire us
          </a>
        </div>
      </div>
      <Workshops />
      <Nerds />
      <Videos />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
