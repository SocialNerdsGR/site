import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Social = () => {
  const { allMarkdownRemark: social } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "social" } } }) {
        edges {
          node {
            id
            frontmatter {
              name
              link
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section className={`social`}>
      {social.edges.map((item, index) => (
        <a href={item.node.frontmatter.link} key={index}>
          <img
            className={`image`}
            src={item.node.frontmatter.image.publicURL}
            alt={item.node.frontmatter.name}
          />
        </a>
      ))}
    </section>
  );
};

export default Social;
