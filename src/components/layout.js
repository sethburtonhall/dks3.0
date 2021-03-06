import React from "react"

// Gatsby
import { Link, StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Components
import Nav from "./nav"
import MobileNav from "./MobileNav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"
// import "semantic-ui-css/semantic.min.css"

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <Wrapper>
            <HelmetDatoCms>
              <script
                src="https://kit.fontawesome.com/856c74694a.js"
                crossorigin="anonymous"
              ></script>
            </HelmetDatoCms>
            <MobileNav location={location.pathname} />
            <div className="app">
              <Header>
                <h3 className="header">
                  <Link to={`/`}>
                    <img
                      src="https://www.datocms-assets.com/23239/1584457022-logo.png"
                      alt=""
                    />
                  </Link>
                </h3>
                <Nav location={location.pathname} />
              </Header>
              <main>{children}</main>
            </div>

            <Footer>
              <div className="social">
                <p className="prompt">Follow Me </p>
                <a
                  className="instagram"
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="facebook"
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="linkedin"
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <span className="copyright">
                <span className="symbol">©</span>
                <span className="date">{new Date().getFullYear()}</span>
                <span className="name">David Stanley Illustration</span>
              </span>
            </Footer>
          </Wrapper>
        )
      }}
    />
  )
}

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          facebook
          instagram
          linkedin
        }
      }
    }
  }
`

// export const query = graphql`
//   query logoQuery {
//     file(relativePath: { eq: "dks-watermark.png" }) {
//       fixed(width: 200, height: 50) {
//         ...GatsbyDatoCmsFixed
//       }
//     }
//   }
// `

export default Layout
