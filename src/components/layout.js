
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

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
          <footer style={{fontSize : `small`}}>
            <p>
            © {new Date().getFullYear()}, Built by <a href="https://kwinten.me">Kwinten Delrue</a> with 
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <br/>
            <span style={{fontSize : `xx-small`}}>I am not affiliated in any way with colruyt, use this site on your own risk</span>
            <br/>
            <span style={{fontSize : `xx-small`}}>Data provided by <a href="https://colruyt.be">Colruyt.</a></span>
            </p>
          </footer>
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
