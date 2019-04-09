import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyle from '../styles/pages/frontpage'
import { QuickLink } from "../styles/pages/frontpage"

const IndexPage = ({ data }) => {
  return(
    <Layout styles={frontPageStyle}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <QuickLink>

        <div className="container">
          Hey
        </div>

      </QuickLink>

    </Layout>
  )

}

export default IndexPage