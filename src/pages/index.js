import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyle from '../styles/pages/frontpage'
import { QuickLink } from "../styles/pages/frontpage"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return(
    <Layout styles={frontPageStyle}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <QuickLink>

        <div className="container">
          {console.log(data)}
          <div dangerouslySetInnerHTML={{__html: data.fileName.content}}></div>
        </div>

      </QuickLink>

    </Layout>
  )

}

export const query = graphql`
query IndexPageQuery {
  fileName: file(relativePath: {eq: "content.html"}) {
    base
    relativeDirectory
    content
  }
}
`

export default IndexPage