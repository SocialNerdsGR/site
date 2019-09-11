import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Workshops = () => {
  const { allMarkdownRemark: { edges: workshops } } = useStaticQuery(graphql`
    query Workshops {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "workshops" } } }
      ) {
        edges {
          node {
            id
            fields {
             slug
            }
            frontmatter {
              title
              date
              summary
              link
              image {
                childImageSharp {
                  fixed(width: 50, height: 50, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(workshops);
  return (
    <Layout>
      <SEO title="Workshops"/>
      <div className="container workshops">
        <h3>Upcoming workshops</h3>
        <div className="cards">
          {workshops.map(workshop => (
            <Link to={workshop.node.fields.slug} className={`card`} key={workshop.node.id}>
              <div className="head">
                <Image fixed={workshop.node.frontmatter.image.childImageSharp.fixed}/>
                <h4>{workshop.node.frontmatter.title}</h4>
              </div>
              <div className={`info`}>
                <p className={`summary`}>
                  {workshop.node.frontmatter.summary}
                </p>
                <span className={`date`}>{workshop.node.frontmatter.date}</span>
              </div>
            </Link>
          ))}
        </div>
        {/*<h3>Past workshops</h3>*/}
        <div className={`subscribe`}>
          <h2>
            Stay up to date
          </h2>
          <h3>
            Learn for all our upcoming workshops first.
          </h3>
          <form action="">
            <input required type="email" placeholder={`nerd@socialnerds.gr`}/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Workshops;
