import { css } from '@emotion/core'
import * as constant from '../base/constants'
import globalStyles from '../base/global'

export default css`
  ${globalStyles}
  display: grid;
  grid-template-columns: ${constant.logoWidth} auto;
  position: sticky;
  
  div:first-of-type{
    display: grid;
    justify-items: end;
    align-items: center;
  }
  
`
