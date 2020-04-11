
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import StickyFooter from 'react-sticky-footer';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
      data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            height: `100%`,
          }}
        >
          <main>{children}</main>
          <StickyFooter
              bottomThreshold={90}
              normalStyles={{
                position: `fixed`,
                left: 0,
                bottom: 0,
                width: `100%`
              }}
              stickyStyles={{
                position: `fixed`,
                left: 0,
                bottom: 0,
                width: `100%`
              }}
          >
          <footer style={{position: `fixed`,
                left: 0,
                bottom: 0,
                width: `100%`,
                marginLeft: `1em`}}>
            <p>
            © {new Date().getFullYear()}, Built by <a href="https://kwinten.me">Kwinten Delrue</a> with 
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <br/>
            <span style={{fontSize : `xx-small`}}>I am not affiliated in any way with colruyt, use this site on your own risk</span>
            <br/>
            <span style={{fontSize : `small`}}>Data provided by <a href="https://colruyt.be">Colruyt</a></span>
            </p>
          </footer>
          </StickyFooter>
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
