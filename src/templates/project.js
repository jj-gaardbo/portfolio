import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles, { HeroImage, ProjectContent, ProjectMoodImage } from "../styles/pages/project"
import VideoEmbed from "../components/VideoEmbed"
import { Section } from "../components/Section"
import { getImagePath, getRandomComicPattern, getRandomFrame, invertColor } from "../util/common"
import { Global } from "@emotion/core"
import { css } from '@emotion/core'
import Image from "../components/Image"
import Svg from "../components/Svg"
import { logoWidth } from "../styles/base/constants"

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

        <HeroImage color={pageContext.settings.color} hasVideo={hasVideo} pattern={getRandomComicPattern()}>
          <Svg fill={invertColor(pageContext.settings.color)} svg={getRandomComicPattern()}></Svg>
          <div className="container">
            {pageContext.settings.logo && (
              <div className="company-logo">
                <Image
                  path={getImagePath(pageContext.relativeDirectory, pageContext.settings.logo)}
                  alt={pageContext.settings.title + " logo"}/>
              </div>
            )}
            <Image
              path={getImagePath(pageContext.relativeDirectory, pageContext.settings.mainImg)}
              alt={pageContext.settings.title}/>
          </div>
        </HeroImage>

        <ProjectContent color={pageContext.settings.color} invertedColor={invertColor(pageContext.settings.color)} hasVideo={hasVideo}>
          <div className="container">

            <div className={"text"} dangerouslySetInnerHTML={{__html: pageContext.content}}></div>

            <aside>

              {pageContext.settings.youtubeurl && (
                <VideoEmbed width={700} height={400} id={pageContext.settings.youtubeurl}></VideoEmbed>
              )}

              <div className={"tech"}>
                <h2>Technologies:</h2>
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

            </aside>
          </div>
        </ProjectContent>

        <ProjectMoodImage color={pageContext.settings.color}>
          <Image
            path={getImagePath(pageContext.relativeDirectory, pageContext.settings.secondaryImg)}
            alt={pageContext.settings.title}/>
        </ProjectMoodImage>
      </Section>
    </Layout>
  )
}

export default ProjectPage
