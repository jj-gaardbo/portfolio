import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import { Link } from "@reach/router"
import styled from "@emotion/styled"
import * as constant from "../styles/base/constants.js"
import Svg from "./Svg"
import { getCategoryObject } from "../util/common"

export const ProjectItemStyled = styled.article`
     background-color: ${constant.darkWhite};
     display: grid;
     grid-template-rows: 245px 40px 60px;
		.gatsby-image-wrapper{
		  grid-row: 1;
		  width: 100%;
		  height: 245px;
		  img{
		    min-height: 100%;
		  }
		}
		.project-item-cat{
		  display: grid;
		  grid-column: -1 / 1;
		  justify-content: center;
		  svg{
		    margin-top: -40px;
		    z-index: 1;
		  }
		  
		}
		p{
		  text-align: center;
		  font-size: ${constant.textSize};
		  box-sizing: border-box;
		  padding: ${constant.padMobile};
		  grid-row: 3;
		}
`

const ProjectItem = props => {
  let category = getCategoryObject(props.settings.category)

  return (
  <ProjectItemStyled>
    <Link to={props.path}>
      <Image alt={"ImageTest"} path={props.imagePath} />
      <div className="project-item-cat">
        <Svg width={80} height={80} svg={category.icon} fill={category.color}></Svg>
      </div>
      <p>{props.settings.title}</p>
    </Link>
  </ProjectItemStyled>
)}

ProjectItem.propTypes = {
  content: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectItem
