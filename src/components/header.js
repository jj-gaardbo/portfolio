import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./Svg"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Link to='/' aria-label='Home' className={"logo"}>
      <Svg svg={Logo} fill={"#010101"} width={230} />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
