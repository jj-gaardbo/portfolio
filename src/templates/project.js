import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles from '../styles/pages/project'
import VideoEmbed from "../components/VideoEmbed"

const ProjectPage = ({ pageContext }) => {
  return (
    <Layout styles={projectTemplateStyles}>
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <section>

        <div className="container">

          <div className="content">
            <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
            {/*https://www.youtube.com/embed/kiQkEMG6E3g?controls=1&showinfo=1&rel=1&autoplay=1&loop=1&mute=1*/}
          </div>

          {pageContext.settings.youtubeurl && (
            <VideoEmbed width={"100%"} height={"100%"} id={pageContext.settings.youtubeurl}></VideoEmbed>
          )}

        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage
