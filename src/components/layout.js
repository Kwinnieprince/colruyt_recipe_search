
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import GitHubButton from 'react-github-btn'
import posthog from "gatsby-plugin-posthog-analytics"


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
          <main style={{zIndex: 1500}}>{children}</main>
          <footer style={{fontSize : `small`, zIndex: 900}}>
            <p>
            © {new Date().getFullYear()}, Built by <a href="https://kwinten.me">Kwinten Delrue</a> with 
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <span style={{display: `block`}}></span>
            <span style={{fontSize : `xx-small`, lineHeight: `5px`}}>I am not affiliated in any way with colruyt, use this site on your own risk</span>
            <span style={{display: `block`}}></span>
            <span style={{fontSize : `xx-small`}}>Data comes from <a href="https://colruyt.be">Colruyt.</a></span>
            <span style={{display: `block`}}></span>
            <GitHubButton href="https://github.com/kwinnieprince/colruyt_recipe_search" data-color-scheme="no-preference: dark; light: dark; dark: dark;" aria-label="Star kwinnieprince/colruyt_recipe_search on GitHub">Star</GitHubButton>
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
