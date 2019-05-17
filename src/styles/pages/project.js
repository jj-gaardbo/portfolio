import { css } from '@emotion/core'
import * as constant from '../base/constants'
import globalStyles from '../base/global'
import { containerLayout } from "../base/global"
import styled from "@emotion/styled"
import { getRandomFrame } from "../../util/common"

export default css`
  ${globalStyles}
`

export const HeroImage = styled.div(props => (css`
  ${containerLayout}
  height: ${constant.heroHeightMob};
  position: relative;
  grid-row: 1;
  svg{
    
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 4;
    opacity: 0.1;
  }
  
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
    border: 10px solid ${constant.black};
    position: relative;
    
    .gatsby-image-wrapper{
      height: ${constant.heroHeightMob};
      width: 100%;
      grid-row: 1;
    }

   .company-logo{
      display: block;
      position: absolute;
      max-width: 100%;      
      z-index: 2;
      width: 140px;
      left: calc(50% - ${constant.padMobile});
      margin-left: -70px;
      top: 10%;
      padding: ${constant.padMobile};
      border: 10px solid ${constant.black};
      background-color: ${constant.darkWhite};
      
      &>.gatsby-image-wrapper{
        height: auto;
      }
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
        
        .gatsby-image-wrapper{
          grid-row: 1;
          height: ${constant.heroHeight};
          width: auto;
        } 
        
        .company-logo{
            border-top: none;
            border-right: none;
            background-color: ${constant.darkWhite};
            box-sizing: border-box;
            display: block;
            position: absolute;
            max-width: 100%;      
            z-index: 2;
            width: 276px;
            right: 0;
            left: auto;
            top: 0;
            padding: 10px;
            
            &>.gatsby-image-wrapper{
              height: auto;
            }
         }
      }
  }
`))

export const ProjectContent = styled.div(props => (css`
  ${containerLayout};
  z-index: 2;
  background-color: ${constant.darkWhite};
  grid-row: 2;
  
  .container{
    grid-template-rows: auto;
    grid-template-columns: auto;
    padding-bottom: calc(${constant.padDesktop} * 4);
    
    aside{
      grid-column: -1 / 1;
    }
    
    h2{
      padding-bottom: ${constant.padMobile};
    }
    
    .text{
      padding-top: calc(${constant.padMobile} * 2);
    }
    
    .text, .tech{
      padding-bottom: calc(${constant.padMobile} * 4);
    }
    
    iframe{
      width: 100%;
      padding-bottom: calc(${constant.padDesktop} * 3);
    }
  }
  
  ${constant.lg}{
    .container{
      padding-bottom: 0;
      grid-template-columns: auto calc(700px + (${constant.padDesktop}*2));
      
      .text{
        grid-row: 1;
        grid-column: 1;
        padding-right: calc(${constant.padDesktop} * 3);
        color: ${constant.black}!important;
      }
      
      aside{
        background-color: ${props.color};
        grid-column: 2;
        padding-bottom: calc(${constant.padDesktop} * 3);
        
        h2{
          padding-bottom: ${constant.padDesktop};
          color: ${props.invertedColor};
        }
      
        .tech{
          grid-row: 2;
          grid-column: 2;
          box-sizing: border-box;
          padding: ${constant.padDesktop};
          color: ${props.invertedColor};
        }
      
        iframe{
          grid-row: 1;
          grid-column: 2;
          background-image: url(${getRandomFrame()});
          background-repeat: no-repeat;
          background-size: cover;
          background-color: ${props.color};
          padding: ${constant.padDesktop};
          box-sizing: border-box;
          display: block;
          justify-self: end;
          max-width: 90%;
          z-index: 3;
          margin: -40px calc(${constant.padDesktop}) 40px calc(${constant.padDesktop});
          border-bottom: 10px solid ${constant.black};
        } 
      }
    }
  }
`))

export const ProjectMoodImage = styled.div(props => (css`
  ${containerLayout};
  background-color: ${constant.darkWhite};
  .gatsby-image-wrapper{
    grid-column: -1 / 1;
    border: 10px solid ${constant.black};
    box-sizing: border-box;
  }
  
  ${constant.lg}{
    .gatsby-image-wrapper{
      grid-column: -3 / 1;
    }
  }
`))