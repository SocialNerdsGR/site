import React from "react";

import SEO from "../components/seo";

import Layout from "../components/Layout";
import Nerds from "../sections/Nerds";
import Contact from "../sections/Contact";
import Videos from "../sections/Videos";
import Workshops from "../sections/Workshops";
import Home from "../sections/Home";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Home />
      <Workshops />
      <Nerds />
      <Videos />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
