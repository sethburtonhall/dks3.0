import React from "react"

// Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

// Styles
import { StyledBlogPost } from "../styles/StyledBlogPost"
// import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.blogPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const renderPagination = () => {
    if (location.pathname.includes("blog")) {
      return (
        <Pagination
          previous={next}
          next={previous}
          type="blog"
          page="Post"
        />
      )
    } else {
      return (
        <Pagination
          previous={next}
          next={previous}
          type="blog"
          page="Category"
        />
      )
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.title} />
      <StyledBlogPost>
        <Img
          className="full-width"
          fluid={post.image.fluid}
          duration={1000}
          alt="Featured Image"
        />
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">{post.date}</p>
        <div className="post-body">
          <div
            dangerouslySetInnerHTML={{
              __html: post.bodyNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <hr />
      </StyledBlogPost>
      {renderPagination()}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    blogPost: datoCmsBlog(slug: { eq: $slug }) {
      id
      date(formatString: "MMMM Do, YYYY")
      title
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      image: headerImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
