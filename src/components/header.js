import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./Svg"
import Logo from "../images/logo.svg"
import styled from "@emotion/styled"
import header from "../styles/sections/header"

const HeaderStyled = styled.header`
  ${header}
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Link to='/' aria-label='Home' className={"logo"}>
      <Svg svg={Logo} fill={"#010101"} width={230} />
    </Link>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
