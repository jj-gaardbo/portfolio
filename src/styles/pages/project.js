import { css } from '@emotion/core'
import * as constant from '../base/constants'
import globalStyles from '../base/global'
import { containerLayout } from "../base/global"
import styled from "@emotion/styled"

export default css`
  ${globalStyles}
`

export const HeroImage = styled.div(props => (css`
  ${containerLayout}
  height: ${constant.heroHeightMob};
  
  &:before{
    position: absolute;
    content: '';
    display: block;
    height: ${constant.heroHeightMob};
    width: 100%;
    opacity: 0.1;
    background-color: ${constant.black};
  }
  .container{
    grid-row: 1;
    grid-column: -1 / 1;    
    grid-template-rows: ${constant.heroHeightMob} 300px;
    
    .gatsby-image-wrapper{
      height: ${constant.heroHeightMob};
      width: 100%;
      grid-row: 1;
    }
    
    iframe{
      display: none;
    }
  }
  
  ${constant.lg}{
      height: ${constant.heroHeight};
      &:before{
        height: ${constant.heroHeight};
      }
      .container{
        grid-column: 3;
        display: grid;
        grid-template-rows: calc(${constant.heroHeight} - 70px) 400px;
        
        .gatsby-image-wrapper{
          grid-row: 1;
          height: ${constant.heroHeight};
          width: auto;
        }  
        iframe{
          background-color: ${props.color};
          padding: ${constant.padDesktop};
          box-sizing: border-box;
          display: block;
          justify-self: end;
          z-index: 3;
          grid-row: 2;
          margin-right: ${constant.padDesktop};
        }
      }
  }
`))

export const ProjectContent = styled.div`
  ${containerLayout};
  background-color: ${constant.darkWhite};
  
  .container{
    grid-template-columns: auto calc(700px + (${constant.padDesktop} * 3));
  }
`