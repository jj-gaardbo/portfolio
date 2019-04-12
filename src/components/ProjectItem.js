import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import { Link } from "@reach/router"
import styled from "@emotion/styled"

export const ProjectItemStyled = styled.article`
		
`

const ProjectItem = props => (
  <ProjectItemStyled>
    <Link to={props.path}>
      <Image alt={"ImageTest"} path={props.imagePath} />
      <p>{props.settings.title}</p>
    </Link>
  </ProjectItemStyled>
)

ProjectItem.propTypes = {
  content: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectItem
