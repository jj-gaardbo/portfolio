import { css } from '@emotion/core'
import * as constant from './constants'
import resets from './resets'

export default css`
  ${resets}

  #___gatsby 	[tabindex= "-1"], .wrapper{
    display: grid;
    grid-template-columns: auto ${constant.padDesktop} [contentStart] ${constant.wrapperMaxWidthDesktop} [contentEnd] ${constant.padDesktop} auto;
  }
  
  header, main{
    display: grid;
    grid-column: 3;
  }
`
