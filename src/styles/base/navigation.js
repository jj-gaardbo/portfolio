import { css, keyframes } from '@emotion/core'
import * as constant from './constants'

const animateOpen = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 100vh;
  }
`;

export default css`
  z-index: 999;
  .navbar-desktop{
    display: none!important;
  }
  .navbar-mobile{
    &>div:nth-of-type(2){
      animation: ${animateOpen} 0.2s ease-in;
      top: ${constant.headerHeightMob};
      left: 0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: ${constant.darkWhite};
      .nav-menu{
        display: grid;
        grid-template-columns: ${constant.padMobile} auto ${constant.padMobile};
        padding-top:${constant.padMobile};
        
        ul{
          grid-column: 2;
          display: block;
          justify-self: left;
          a{
            color: ${constant.black};
            text-decoration: none;
            font-family: 'Open Sans', sans-serif;
          }
        }
      }
      ${constant.lg}{
        top: ${constant.headerHeight};
      }
    }
  }
  
  ${constant.lg}{
    .navbar-desktop{
      display: inline-block!important;
    }
    .navbar-mobile{
      display: none;
    }
  }
`