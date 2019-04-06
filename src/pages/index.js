import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import frontPageStyles from '../styles/pages/frontpage'

const IndexPage = ({ data }) => {
  return(
    <Layout styles={frontPageStyles}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Link to="/projects">Go back to the projects page</Link>
    </Layout>
  )

}

export default IndexPage