import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import Section from "../components/section";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;

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
                  fluid(maxWidth: 250, maxHeight: 180, quality: 80) {
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
      <Wrapper>
        {videos.edges.map(item => (
          <a
            key={item.node.id}
            target="_blank"
            rel="noopener noreferrer"
            href={item.node.frontmatter.link}
          >
            <Image fluid={item.node.frontmatter.image.childImageSharp.fluid} />
            <span>{item.node.frontmatter.stack}</span>
          </a>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Videos;
