import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const Section = styled.section(props => (css`
  background-color: ${props.color};  
  
  h1,h2,h3,h4,h5,h6,ul,li,ol,strong,i,b,span,div,blockquote,cite,p,a,dl{
    color: ${props.invertedColor};
  }
`))