import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyles from '../styles/pages/frontpage'

const IndexPage = ({ data }) => {
  return(
    <Layout styles={frontPageStyles}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />



    </Layout>
  )

}

export default IndexPage