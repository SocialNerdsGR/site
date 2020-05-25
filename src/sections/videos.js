import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import Section from "../components/section";

const Videos = () => {
  const { allMarkdownRemark: videos } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___order, order: ASC }
        filter: { frontmatter: { type: { eq: "videos" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              link
              stack
              image {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
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
      title={`YouTube`}
      description={`Join SocialNerds community! Check out our YouTube videos`}
      id={"youtube"}
      dark={true}
    >
      <div className={"videos"}>
        {videos.edges.map(item => (
          <a
            key={item.node.id}
            target="_blank"
            rel="noopener noreferrer"
            href={item.node.frontmatter.link}
          >
            <Image
              className={`image`}
              imgStyle={{ transition: "all 0.5s ease-in-out" }}
              alt={item.node.frontmatter.stack}
              fluid={item.node.frontmatter.image.childImageSharp.fluid}
            />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Videos;
