import { css } from '@emotion/core'
import * as constant from './constants'
import * as resets from './resets'
import navigation from './navigation'

export default css`
  ${resets}
  ${navigation}

  #___gatsby 	[tabindex= "-1"]{
    display: grid;
    grid-template-columns: ${constant.padMobile} [contentStart] auto [contentEnd] ${constant.padMobile};
    ${constant.lg}{
      grid-template-columns: auto ${constant.padMobile} [contentStart] calc(${constant.wrapperMaxWidthTablet} - (${constant.padMobile}*2)) [contentEnd] ${constant.padMobile} auto;
    }
    ${constant.xl}{
      grid-template-columns: auto ${constant.padDesktop} [contentStart] calc(${constant.wrapperMaxWidthDesktopSmall} - (${constant.padDesktop}*2)) [contentEnd] ${constant.padDesktop} auto;
    }
    ${constant.xxl}{
      grid-template-columns: auto ${constant.padDesktop} [contentStart] ${constant.wrapperMaxWidthDesktop} [contentEnd] ${constant.padDesktop} auto;
    }
  }
  
  header{
    display: grid;
    grid-column: 2;
    grid-template-rows: ${constant.headerHeight};
    .logo{
      &>svg{
        width: 100px
      }
    }
    
    ${constant.lg} {
      grid-column: 3;
      .logo{
        &>svg{
          width: ${constant.logoWidth}
        }
      }
    }
  }
  
  main{
    display: grid;
    grid-column: 3;
    grid-auto-rows: auto;
  }
`
