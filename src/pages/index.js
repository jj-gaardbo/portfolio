import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import ProjectItem from "../components/ProjectItem"

const IndexPage = ({ data }) => {

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
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <section className='projects-overview'>
        {
            projects.map((node, index) => (
              <ProjectItem
                key={index}
                content={node.content}
              />
            ))
        }
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

export default IndexPage