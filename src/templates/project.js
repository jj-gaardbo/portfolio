import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Gaardbo Digital - Projects" keywords={[`projects`, `overview`, `gaardbo digital`]} />
      <article>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
        <Link to="/projects">Go back to the projects page</Link>
        <hr/>
        <Link to="/">Go back to the homepage</Link>
      </article>
    </Layout>
  )
}

export default ProjectPage
