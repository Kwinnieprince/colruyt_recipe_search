import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FindFood from "../components/FindFood"

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <div>
      <FindFood/>
    </div>
  </Layout>
)

export default IndexPage
