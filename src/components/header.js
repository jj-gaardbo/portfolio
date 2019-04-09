import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./Svg"
import Logo from "../images/logo.svg"
import OpenMenu from "../images/icons/menuButton.svg"
import CloseMenu from "../images/icons/closeButton.svg"
import styled from "@emotion/styled"
import header from "../styles/sections/header"
import ResponsiveMenu from 'react-responsive-navbar';
import * as constant from '../styles/base/constants'

const HeaderStyled = styled.header`
  ${header}
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div className="header-inner">
      <div className="container">
        <Link to='/' aria-label='Home' className={"logo"}>
          <Svg svg={Logo} fill={constant.black} width={constant.logoWidth} />
        </Link>
        <ResponsiveMenu
          menuOpenButton={<Svg width={constant.burgerBtnWidth} height={constant.burgerBtnHeight} svg={OpenMenu}/>}
          menuCloseButton={<Svg width={constant.burgerBtnWidth} height={35} svg={CloseMenu}/>}
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
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
