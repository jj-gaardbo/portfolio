import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./Svg"
import Logo from "../images/logo.svg"
import OpenMenu from "../images/icons/menuButton.svg"
import CloseMenu from "../images/icons/closeButton.svg"
import ResponsiveMenu from 'react-responsive-navbar';
import * as constant from '../styles/base/constants'
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { invertColor } from "../util/common"

const HeaderStyled = styled.header(props => (css`
  background-color: ${props.backgroundColor};
  color: ${props.color};
  .logo{
    svg{
      fill: ${props.color};
    }
  }
  .nav-menu{
    ul{
      li{
        a{
          color: ${props.color};
        }
      }
    }
  }
  svg{
    fill: ${props.color};
  }
`))

const Header = ({ siteTitle, backgroundColor, color }) => (
  <HeaderStyled backgroundColor={backgroundColor} color={color}>
    <div className="header-inner">
      <div className="container">
        <Link to='/' aria-label='Home' className={"logo"}>
          <Svg svg={Logo} fill={invertColor(backgroundColor)} width={constant.logoWidth} />
        </Link>
        <ResponsiveMenu
          menuOpenButton={<Svg fill={invertColor(backgroundColor)} width={constant.burgerBtnWidth} height={constant.burgerBtnHeight} svg={OpenMenu}/>}
          menuCloseButton={<Svg fill={invertColor(backgroundColor)} width={constant.burgerBtnWidth} height={35} svg={CloseMenu}/>}
          changeMenuOn="992px"
          largeMenuClassName="navbar-desktop"
          smallMenuClassName="navbar-mobile"
          menu={
            <div className={"nav-menu"}>
              <ul>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  backgroundColor: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  backgroundColor: ''
}

export default Header
