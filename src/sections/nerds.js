import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import Section from "../components/section";

const Nerds = () => {
  const { allMarkdownRemark: nerds } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___order, order: ASC }
        filter: { frontmatter: { type: { eq: "nerds" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              link
              name
              image {
                childImageSharp {
                  fluid(maxWidth: 250, maxHeight: 250, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Section
      title={`Who We Are`}
      description={`We write code, we love code, we teach code`}
      id={`nerds`}
    >
      <div className={`nerds`}>
        {nerds.edges.map(item => (
          <a
            key={item.node.id}
            target="_blank"
            rel="noopener noreferrer"
            href={item.node.frontmatter.link}
            className={`link`}
          >
            <div>
              <Image
                className={`image`}
                fluid={item.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
            <span className={`overlay`}>
              <span className={`text`}>{item.node.frontmatter.name}</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Nerds;
