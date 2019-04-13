import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles, { HeroImage, ProjectContent } from "../styles/pages/project"
import VideoEmbed from "../components/VideoEmbed"
import { Section } from "../components/Section"
import { getImagePath, invertColor } from "../util/common"
import { Global } from "@emotion/core"
import { css } from '@emotion/core'
import Image from "../components/Image"

const ProjectPage = ({ pageContext }) => {
  let hasVideo = pageContext.settings.youtubeurl !== ""

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


        <HeroImage color={pageContext.settings.color} hasVideo={hasVideo}>
          <div className="container">
            <Image
              path={getImagePath(pageContext.relativeDirectory, pageContext.settings.mainImg)}
              alt={pageContext.settings.title}/>

              {pageContext.settings.youtubeurl && (
                <VideoEmbed width={700} height={400} id={pageContext.settings.youtubeurl}></VideoEmbed>
              )}
          </div>
        </HeroImage>

        <ProjectContent color={pageContext.settings.color} hasVideo={hasVideo}>
          <div className="container">
            <div className={"text"} dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
            <div className={"tech"}>
              <ul>
                {Object.keys(
                  pageContext.settings.technologies
                ).map((key, index, value) => (
                  <li key={index}>
                    <strong>
                      {pageContext.settings.technologies[key].toString()}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ProjectContent>
      </Section>
    </Layout>
  )
}

export default ProjectPage
