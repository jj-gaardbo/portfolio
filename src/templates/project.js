import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles from '../styles/pages/project'
import VideoEmbed from "../components/VideoEmbed"
import { Section } from "../components/Section"
import * as constant from "../styles/base/constants.js"
import { invertColor } from "../util/common"

const ProjectPage = ({ pageContext }) => {
  return (
    <Layout styles={projectTemplateStyles} backgroundColor={pageContext.settings.color} color={invertColor(pageContext.settings.color)}>
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <Section color={pageContext.settings.color} invertedColor={invertColor(pageContext.settings.color)}>

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
