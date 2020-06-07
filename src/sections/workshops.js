import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import Section from "../components/section";

const Workshops = () => {
  const { allMarkdownRemark: workshops } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___order, order: ASC }
        filter: { frontmatter: { type: { eq: "workshops" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              description
              image {
                childImageSharp {
                  fluid(quality: 100) {
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
      title={`Workshops`}
      description={`Learn modern technologies the right way & elevate your skills`}
      id={"workshops"}
    >
      <div className="workshops">
        {workshops.edges.map(item => (
          <a
            href="https://socialnerdsgr.eventbrite.com"
            target="_blank"
            rel="noreferrer"
            className="workshops-link"
            className="workshop"
            key={item.node.id}
          >
            <div className="info">
              <h3>{item.node.frontmatter.name}</h3>
              <p>{item.node.frontmatter.description}</p>
            </div>
            <div className="logo">
              <Image
                className={`image`}
                alt={item.node.frontmatter.stack}
                fluid={item.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Workshops;
