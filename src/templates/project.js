import React from 'react'
import { Link } from "gatsby"

const ProjectPage = ({ pageContext }) => {
  return (
    <article>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
      <Link to="/projects">Go back to the projects page</Link>
      <hr/>
      <Link to="/">Go back to the homepage</Link>
    </article>
  )
}

export default ProjectPage
