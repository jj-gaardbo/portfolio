import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import { Link } from "@reach/router"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import * as constant from "../styles/base/constants.js"
import Svg from "./Svg"
import { getCategoryObject, invertColor } from "../util/common"

const ProjectItemOverlay = styled.div(props => (css`
  display: grid;
  grid-row: 3;
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
		    margin-top: -120px;
		    width: 80px;
		    height: 80px;
		    z-index: 1;
		  }
		  ${constant.lg}{
        svg{
		      margin-top: -40px;
		    }
      }
		}
		p{
		  font-family: 'Roboto Slab', serif;
		  line-height: 60px;
		  text-align: center;
		  font-size: ${constant.h6SizeDesk};
		  box-sizing: border-box;
		  padding: ${constant.padMobile};
		  grid-row: 3;
		  color: ${props.textColor};
		  z-index: 1;
		}
		${constant.lg}{
		  grid-row: 2;
		}
`))

const ProjectItemStyled = styled.article`
     background-color: ${constant.darkWhite};
     display: grid;
     grid-template-rows: 500px;
     a{
      display: grid;
      grid-template-rows: ${constant.padMobile} 200px auto ${constant.padMobile};
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
		  opacity: 1;
		}
		${constant.lg}{
      a{
        grid-template-rows: ${constant.padMobile} auto ${constant.padMobile};
        grid-template-columns: ${constant.padMobile} auto ${constant.padMobile};
       }
      ${ProjectItemOverlay}{
        opacity: 0;
        transition: all 0.2s ease;
      }
      &:hover{
        ${ProjectItemOverlay}{
          opacity: 1;
        }
      }
		}
`

const ProjectItem = props => {
  let category = getCategoryObject(props.settings.category)

  return (
  <ProjectItemStyled>
    <Link to={props.path}>
      <Image alt={"ImageTest"} path={props.imagePath} />
      <ProjectItemOverlay color={props.settings.color} textColor={invertColor(props.settings.color)}>
        <div className="project-item-cat">
          <Svg width={170} height={170} svg={category.icon} fill={"#000"}></Svg>
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
