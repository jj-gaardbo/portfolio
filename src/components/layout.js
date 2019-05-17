import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css, Global } from "@emotion/core"
import Header from "./header"
import { Footer } from "./footer"

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
        <Global
          styles={css`
					html {
						background-color: ${backgroundColor};
					}
				`}
        />
        <Header siteTitle={data.site.siteMetadata.title} backgroundColor={backgroundColor} color={color}/>
        <div className="push">&nbsp;</div>
        <main>
          <Global styles={styles} />
          {children}
        </main>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
}

export default Layout
