import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectTemplateStyles from '../styles/pages/project'

const ProjectPage = ({ pageContext }) => {
  return (
    <Layout styles={projectTemplateStyles}>
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <section>
        <div className="container">
          <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage
