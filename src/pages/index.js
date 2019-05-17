import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import frontPageStyle from '../styles/pages/frontpage'
import { graphql } from "gatsby"
import * as constant from '../styles/base/constants'
import { css, Global } from "@emotion/core"
import Image from "../components/Image"
import { invertColor } from "../util/common"
import Svg from "../components/Svg"
import pattern from "../images/patterns/4.svg"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const IndexPage = ({ data }) => {

  const content = data.text.content
  const settingsNode = JSON.parse(data.settings.content)

  return(
    <Layout styles={frontPageStyle} backgroundColor={settingsNode.color} color={invertColor(settingsNode.color)}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Global
        styles={css`
					html {
						background-color: ${constant.darkWhite};
					}
				`}
      />

      <ParallaxProvider>

        <section className='frontpage-section'>

          <Svg width={442} height={500} svg={pattern}></Svg>

          <div className="container">

            <div className="text">

              <div dangerouslySetInnerHTML={{__html: content}}></div>

            </div>

            <Parallax className="custom-class" y={[15, -30]} x={[10, 25]} tagOuter="figure">

              <Image path={settingsNode.mainImg} alt={"Profile Image"}/>

            </Parallax>

          </div>

        </section>

      </ParallaxProvider>

    </Layout>
  )

}

export const query = graphql`
query IndexPageQuery {
  text: 
    file(relativePath: {eq: "content.html"}) {
      base
      relativeDirectory
      content
  },
  settings:
    file(relativePath: {eq: "settings.json"}) {
      base
      relativeDirectory
      content
    }
}
`

export default IndexPage