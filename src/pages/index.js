import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Link to="/projects">Go back to the projects page</Link>
    </Layout>
  )

}

export default IndexPage