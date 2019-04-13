import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles from '../styles/pages/project'
import VideoEmbed from "../components/VideoEmbed"
import { Section } from "../components/Section"
import * as constant from "../styles/base/constants.js"
import { getImagePath, invertColor } from "../util/common"
import { Global } from "@emotion/core"
import { css } from '@emotion/core'
import styled from "@emotion/styled"
import Image from "../components/Image"
import { containerLayout } from "../styles/base/global"

const HeroImage = styled.div`
  ${containerLayout}
  height: ${constant.heroHeightMob};
  
  &:before{
    position: absolute;
    content: '';
    display: block;
    height: ${constant.heroHeightMob};
    width: 100%;
    opacity: 0.1;
    background-color: ${constant.black};
  }
  .container{
    grid-row: 1;
    grid-column: -1 / 1;
  }
  
  .gatsby-image-wrapper{
    height: ${constant.heroHeightMob};
    width: 100%;
  }
  
  ${constant.lg}{
      height: ${constant.heroHeight};
      &:before{
        height: ${constant.heroHeight};
      }
      .gatsby-image-wrapper{
        height: ${constant.heroHeight};
        width: auto;
      }
      .container{
        grid-column: 3;
      }
  }
`

const ProjectPage = ({ pageContext }) => {
  return (
    <Layout styles={projectTemplateStyles} backgroundColor={pageContext.settings.color} color={invertColor(pageContext.settings.color)}>
      <Global
        styles={css`
					html {
						background-color: ${pageContext.settings.color};
					}
				`}
      />
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <Section color={pageContext.settings.color} invertedColor={invertColor(pageContext.settings.color)}>


        <HeroImage>
          <div className="container">
            <Image
              path={getImagePath(pageContext.relativeDirectory, pageContext.settings.mainImg)}
              alt={pageContext.settings.title}
            />
          </div>
        </HeroImage>

        <div className="container">

          <div className="content">
            <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
          </div>

          {pageContext.settings.youtubeurl && (
            <VideoEmbed width={"100%"} height={"100%"} id={pageContext.settings.youtubeurl}></VideoEmbed>
          )}

        </div>
      </Section>
    </Layout>
  )
}

export default ProjectPage
