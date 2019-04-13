import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Global } from '@emotion/core'

import Header from "./header"

const Layout = ({ children, styles, backgroundColor, color }) => (
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
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} backgroundColor={backgroundColor} color={color}/>
        <div className="push">&nbsp;</div>
        <main>
          <Global styles={styles} />
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
}

export default Layout
