import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import { Link } from "@reach/router"

const ProjectItem = props => (
  <article>
    <Link to={props.path}>
      <Image alt={"ImageTest"} path={props.imagePath} />
      <div dangerouslySetInnerHTML={{  __html: props.content  }} />
    </Link>
  </article>
)

ProjectItem.propTypes = {
  content: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectItem
