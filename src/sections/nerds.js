import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Section from "../components/section";
// import "./nerds.css";

const Image = styled(Img)`
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
`;

const Text = styled.span`
  color: white;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Overlay = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.2s ease;
  background-color: #18a2de;
  border-radius: 50%;
  z-index: 2;
`;

const Link = styled.a`
  position: relative;
  width: 100%;
  &:hover ${Overlay} {
    opacity: 0.8;
  }
`;

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
              stack
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
      title={`About us`}
      description={`We are into technology and knowledge sharing`}
      id={`nerds`}
    >
      <Wrapper>
        {nerds.edges.map(item => (
          <Link
            key={item.node.id}
            target="_blank"
            rel="noopener noreferrer"
            href={item.node.frontmatter.link}
          >
            <div>
              <Image
                fluid={item.node.frontmatter.image.childImageSharp.fluid}
              />
            </div>
            <Overlay>
              <Text>{item.node.frontmatter.stack}</Text>
            </Overlay>
          </Link>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Nerds;
