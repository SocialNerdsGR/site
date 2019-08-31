import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image className={`logo-image`} fluid={data.placeholderImage.childImageSharp.fluid} alt={`logo`}/>
};

export default LogoImage;