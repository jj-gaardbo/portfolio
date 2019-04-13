import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyle from '../styles/pages/frontpage'
import { QuickLink } from "../styles/pages/frontpage"
import { graphql } from "gatsby"
import * as constant from '../styles/base/constants'
import { css, Global } from "@emotion/core"

const IndexPage = ({ data }) => {
  return(
    <Layout styles={frontPageStyle} backgroundColor={constant.darkWhite} color={constant.black}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Global
        styles={css`
					html {
						background-color: ${constant.darkWhite};
					}
				`}
      />

      <QuickLink>

        <div className="container">
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