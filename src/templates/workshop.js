import React from "react";
import { graphql } from "gatsby";
import Image from 'gatsby-image';

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="container">
          <article className={`workshop`}>
            <Image className={`banner`} fluid={post.frontmatter.banner.childImageSharp.fluid} />
              <h1>{post.frontmatter.title}</h1>
              <a className={`ticket`} href={post.frontmatter.link}>Buy a ticket</a>
            <section dangerouslySetInnerHTML={{ __html: post.html }}/>
          </article>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        summary
        link
        banner {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 250, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;