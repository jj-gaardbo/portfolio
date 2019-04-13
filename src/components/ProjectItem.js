import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import { Link } from "@reach/router"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import * as constant from "../styles/base/constants.js"
import Svg from "./Svg"
import { getCategoryObject } from "../util/common"

const ProjectItemOverlay = styled.div(props => (css`
  display: grid;
  grid-row: 2;
  grid-column: 2;
  z-index: 2;
  grid-template-rows: auto 80px 100px auto;
  position: relative;
  &:before{
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${props.color};
  }
  .project-item-cat{
		  display: grid;
		  grid-column: -1 / 1;
		  grid-row: 2;
		  justify-content: center;
		  align-self: center;
		  svg{
		    margin-top: -40px;
		    z-index: 1;
		  }
		}
		p{
		  font-family: "Pixel", serif;
		  line-height: 60px;
		  text-align: center;
		  font-size: ${constant.h6SizeDesk};
		  box-sizing: border-box;
		  padding: ${constant.padMobile};
		  grid-row: 3;
		  color: ${constant.darkWhite};
		  z-index: 1;
		  text-shadow: 1px 1px 8px ${constant.black};
		}
`))

const ProjectItemStyled = styled.article`
     background-color: ${constant.darkWhite};
     display: grid;
     grid-template-rows: 500px;
     a{
      display: grid;
      grid-template-rows: ${constant.padMobile} auto ${constant.padMobile};
      grid-template-columns: ${constant.padMobile} auto ${constant.padMobile};
     }
		.gatsby-image-wrapper{
		  width: 100%;
		  height: 100%;
		  grid-row: -1 / 1;
      grid-column: -1 / 1;
		  img{
		    min-height: 100%;
		  }
		}
		${ProjectItemOverlay}{
		  opacity: 0;
		  transition: all 0.3s ease;
		}
		&:hover{
		  ${ProjectItemOverlay}{
		    opacity: 1;
		  }
		}
`

const ProjectItem = props => {
  let category = getCategoryObject(props.settings.category)

  return (
  <ProjectItemStyled>
    <Link to={props.path}>
      <Image alt={"ImageTest"} path={props.imagePath} />
      <ProjectItemOverlay color={props.settings.color}>
        <div className="project-item-cat">
          <Svg width={80} height={80} svg={category.icon} fill={"#000"}></Svg>
        </div>
        <p>{props.settings.title}</p>
      </ProjectItemOverlay>
    </Link>
  </ProjectItemStyled>
)}

ProjectItem.propTypes = {
  content: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectItem
