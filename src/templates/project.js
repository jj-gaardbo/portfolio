import React from 'react'

const ProjectPage = ({ pageContext }) => {
  return (
    <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
  )
}

export default ProjectPage
