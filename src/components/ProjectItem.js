import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = props => (
  <div dangerouslySetInnerHTML={{  __html: props.content  }} />
)

ProjectItem.propTypes = {
  content: PropTypes.string.isRequired
}

export default ProjectItem
