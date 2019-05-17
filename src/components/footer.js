import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./Svg"
import Logo from "../images/logo.svg"
import LinkedIn from "../images/icons/linkedin.svg"
import * as constant from '../styles/base/constants'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { invertColor } from "../util/common"
import { containerLayout } from "../styles/base/global"

const FooterStyled = styled.footer(props => (css`
  ${containerLayout}
  background-color: ${constant.black};
  min-height: 200px;
  
  .container{
    grid-column: 2;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
  }
  
  .logo, .mailto, .linkedin-link{
    justify-self: center;
  }
  
  .logo{
    grid-row: 1;
    align-self: center;
  }
  
  .mailto{
    grid-row: 2;
    align-self: center;
    margin-bottom: ${constant.padMobile};
  }
  
  .linkedin-link{
    grid-row: 3;
    
    max-width: 25px;
    svg{
      margin-top: 0;
      max-width: 25px;
      width: 25px;
      height: 25px;
      opacity: 1;
    }
  }
  
  svg{
    fill: ${constant.darkWhite};
    transition: all .2s ease-in;
    
    &:hover{
      fill: ${constant.blueGray};
    }
  }
  
  a{
    color: ${constant.darkWhite};
    text-decoration: none;
    transition: all .2s ease-in;
    &:hover{
      color: ${constant.blueGray};
    }
  }
  
  ${constant.lg}{
    min-height: 300px;
    
    .container{
      grid-column: 3;
    }
  }
  
`))

export const Footer = ({ backgroundColor, color }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        settings:
          file(relativePath: {eq: "settings.json"}) {
            base
            relativeDirectory
            content
          }
      }
    `}
    render={data => (
      <FooterStyled backgroundColor={backgroundColor} color={color}>

        <div className="container">

          <Link to='/' aria-label='Home' className={"logo"}>
            <Svg svg={Logo} fill={invertColor(backgroundColor)} width={230} height={150}/>
          </Link>

          <a className={"mailto"} href={`mailto:${JSON.parse(data.settings.content).email}`}>{JSON.parse(data.settings.content).email}</a>

          <a className={"linkedin-link"} href={JSON.parse(data.settings.content).linkedinUrl} target={"_blank"}>
            <Svg svg={LinkedIn} fill={invertColor(backgroundColor)} width={25} height={25}/>
          </a>

        </div>

      </FooterStyled>
    )}
  />
)

Footer.propTypes = {
  backgroundColor: PropTypes.string
}

Footer.defaultProps = {
  backgroundColor: ''
}