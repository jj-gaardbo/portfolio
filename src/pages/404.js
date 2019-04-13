import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyle from "../styles/pages/frontpage"
import * as constant from "../styles/base/constants"

const NotFoundPage = () => (
  <Layout styles={frontPageStyle} backgroundColor={constant.black} color={constant.darkWhite}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
