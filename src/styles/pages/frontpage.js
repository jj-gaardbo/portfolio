import { css } from '@emotion/core'
import * as constant from '../base/constants'
import globalStyles, { containerLayout } from "../base/global"

export default css`
  ${globalStyles}
  ${containerLayout}
  position: relative;
  
  svg{
    position: absolute;
    max-width: 100%;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.1;
  }
  
  section{
    padding: ${constant.padMobile} 0 0;
    display: grid;
    grid-template-rows: auto;
    
    .container{
      position: relative;
    }
    
    .text{
      position: static;
      width: 100%;
      background-color: ${constant.darkWhite};
      border: 10px solid ${constant.black};
      box-sizing: border-box;
      padding: 20px 20px 40px;
    }
    
    .parallax-outer{
      max-width: 100%;
      overflow: hidden;
      max-height: 55vh;
    }
    
    .parallax-inner{
      display: grid;
      max-width: 100%;
      overflow: hidden;
      
      .gatsby-image-wrapper{ 
        max-width: 100%;
        img{
          width: 150px;
          -webkit-filter: drop-shadow(5px 5px 5px #222);
          filter: drop-shadow(5px 5px 5px #222);
        }
        
      }  
      
    }
  }
  
  ${constant.md}{
    section{
        .parallax-outer{
          max-height: 110vh;
        }
    
      .text{
        position: absolute;
        left: 0;
        top: 10px;
        z-index: 2;
        max-width: 450px;
      }
    
      .gatsby-image-wrapper{
        justify-self: center;
        width: 800px;
      }
    }
  }
  
  ${constant.lg}{
    section{
      .text{
        max-width: 550px;
      }
    }
  }
  
`
