import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import ProjectItem from "../components/ProjectItem"
import { pathToSlug } from "../util/pageMapper"
import { Link } from "gatsby"
import projectsOverviewStyles from '../styles/pages/projects'
import { getImagePath } from "../util/common"
import * as constant from "../styles/base/constants"
import { css, Global } from "@emotion/core"

const ProjectsPage = ({ data }) => {

  const projects = data.allFile.group.map(group => {
    const contentNode = group.edges.find(edge => edge.node.base === 'content.html').node
    const settingsNode = group.edges.find(edge => edge.node.base === 'settings.json').node
    return {
      content: contentNode.content,
      settings: JSON.parse(settingsNode.content),
      path: settingsNode.relativeDirectory
    }
  })

  return(
    <Layout styles={projectsOverviewStyles} backgroundColor={constant.blueGray} color={constant.darkWhite}>
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <Global
        styles={css`
					html {
						background-color: ${constant.blueGray};
					}
				`}
      />
        <section className='projects-overview'>
          <div className="container">
          {
            projects.map((node, index) => (
              <ProjectItem
                key={index}
                settings={node.settings}
                content={node.content}
                imagePath={getImagePath(node.path, node.settings.mainImg)}
                path={pathToSlug(node.path)}
              />
            ))
          }
          </div>
        </section>
    </Layout>
  )

}

export const query = graphql`
	query ProjectsQuery {
	  allFile(filter: {relativePath: {regex: "/projects.*/(settings.json|content.html)/"}}) {
		group(field: dir) {
		  edges {
			node {
			  base
			  relativeDirectory
			  content
			}
		  }
		}
	  }
	}
`

export default ProjectsPage
