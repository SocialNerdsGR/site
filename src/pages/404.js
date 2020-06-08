import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-page">
      <h1>Joke not found</h1>
      <div>
        Go back to <Link to="/">Mars</Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
