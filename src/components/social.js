import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

const Section = styled.section`
  background-color: #18a2de;
  text-align: center;
  color: white;
  font-size: 1.4rem;
  margin: auto;
  padding: 10px;
`;

const SocialImage = styled.img`
  width: 2rem;
  heigth: 2rem;
  fill: white;
  margin: 0 10px 0 0;
`;

const SocialLink = styled.a``;
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
    <Section>
      {social.edges.map((item, index) => (
        <SocialLink href={item.node.frontmatter.link} key={index}>
          <SocialImage
            src={item.node.frontmatter.image.publicURL}
            alt={item.node.frontmatter.name}
          />
        </SocialLink>
      ))}
    </Section>
  );
};

export default Social;
