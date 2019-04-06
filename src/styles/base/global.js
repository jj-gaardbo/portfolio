import { css } from '@emotion/core'
import * as constant from './constants'
import resets from './resets'

export default css`
  ${resets}

  #___gatsby [tabindex= "-1"]{
    display: grid;
    grid-template-columns: ${constant.padMobile} [contentStart] repeat(10, 1fr) [contentEnd] ${constant.padMobile};
    grid-template-rows: auto 1fr;
    
    ${constant.mq[1]} {
			grid-template-columns: ${constant.padDesktop} [contentStart] repeat(10, 1fr) [contentEnd] ${constant.padDesktop};
    }
  
  .wrapper{
        
  }
`
