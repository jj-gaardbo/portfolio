import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div dangerouslySetInnerHTML={{ __html: data.file.content }}></div>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    file(relativePath: {eq: "Frontpage.html"}) {
 			content
    }
  }
`

export default IndexPage