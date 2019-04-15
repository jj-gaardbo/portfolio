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
import bottomBorder from "../images/frames/bottomBorder.png"

const HeaderStyled = styled.header(props => (css`
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
  &:after{
    content: '';
    max-width: 100%;
    min-width: 100%;
    height: 10px;
    position: absolute;
    bottom: 0;
    background-image: url(${props.border});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
  }
  .header-inner{
    background-color: ${props.backgroundColor};
  }
`))

const Header = ({ siteTitle, backgroundColor, color }) => (
  <HeaderStyled backgroundColor={backgroundColor} color={color} border={bottomBorder}>
    <div className="header-inner">
      <div className="container">
        <Link to='/' aria-label='Home' className={"logo"}>
          <Svg svg={Logo} fill={invertColor(backgroundColor)} width={constant.logoWidth} />
        </Link>
        <ResponsiveMenu
          menuOpenButton={<Svg fill={invertColor(backgroundColor)} width={58} height={50} svg={OpenMenu}/>}
          menuCloseButton={<Svg fill={invertColor(backgroundColor)} width={58} height={35} svg={CloseMenu}/>}
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
