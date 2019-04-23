import { css } from '@emotion/core'
import * as constant from './constants'
import resets from './resets'
import typography from './typography'
import navigation from './navigation'

export const containerLayout = css`
      display: grid;
      grid-column: -1 / 1;
      grid-template-columns: ${constant.padMobile} [contentStart] auto [contentEnd] ${constant.padMobile};
      grid-template-rows: auto;
      ${constant.lg}{
        grid-template-columns: auto ${constant.padMobile} [contentStart] calc(${constant.wrapperMaxWidthTablet} - (${constant.padMobile}*2)) [contentEnd] ${constant.padMobile} auto;
      }
      ${constant.xl}{
        grid-template-columns: auto ${constant.padDesktop} [contentStart] calc(${constant.wrapperMaxWidthDesktopSmall} - (${constant.padDesktop}*2)) [contentEnd] ${constant.padDesktop} auto;
      }
      ${constant.xxl}{
        grid-template-columns: auto ${constant.padDesktop} [contentStart] ${constant.wrapperMaxWidthDesktop} [contentEnd] ${constant.padDesktop} auto;
      }
`

export default css`
  ${resets}
  ${typography}
  ${navigation}

  #___gatsby 	[tabindex= "-1"]{
    display: grid;
    grid-column: -1 / 1;
  }
  
  .push{
    display: grid;
    grid-column: -1 / 1;
    height: ${constant.headerHeightMob};
    background-color: ${constant.darkWhite};
    
    ${constant.lg}{
      height: ${constant.headerHeight};
    }
    
  }
  
  header{
    z-index: 99;
    position: fixed;
    width: 100%;
    background-color: ${constant.darkWhite};
    
    .header-inner{
      ${containerLayout}
   
      .container{
        display: grid;
        grid-template-columns: ${constant.logoWidthMob} auto;
        grid-column: 2;
        grid-template-rows: ${constant.headerHeightMob};
        div:first-of-type{
          display: grid;
          justify-items: end;
          align-items: center;
        }
        .logo{
          &>svg{
            width: ${constant.logoWidthMob};
            height: ${constant.headerHeightMob};
          }
        }
        ${constant.lg} {
          grid-template-columns: ${constant.logoWidth} auto;
          grid-column: 3;
          grid-template-rows: ${constant.headerHeight};
          .logo{
            &>svg{
              width: ${constant.logoWidth};
              height: ${constant.headerHeight};
            }
          }
        }
        
      }
    
    }
  }
  
  main{
    display: grid;
    grid-column: -1 / 1;
    padding-top: 0!important;

    &>div, >section{
      ${containerLayout}
    }
      
    .container{
      display: grid;
      grid-column: 2;
      grid-auto-rows: auto;
      
      ${constant.lg}{
        grid-column: 3;
      }
    }
  }
`