import { css } from '@emotion/core'
import styled from '@emotion/styled'
import * as constant from '../base/constants'
import globalStyles from '../base/global'

export default css`
  ${globalStyles}
  
  
`

export const QuickLinkStyle = css`
  background-color: ${constant.babyBlue};
  height: 100px;
  display: grid;
  grid-column: -1 / 1;
`

export const QuickLink = styled.div`
		${QuickLinkStyle}
`