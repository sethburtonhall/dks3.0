// http://negomi.github.io/react-burger-menu/
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Components
import { slide as Menu } from "react-burger-menu"

// Styles
import { StyledMobileNav } from "../styles/StyledNav"

const Nav = () => {
  var styles = {
    bmMenuWrap: {
      transitionDuration: ".3s",
    },
  }

  return (
    <StyledMobileNav>
      <Menu styles={styles} width={"250px"} right noOverlay disableAutoFocus>
        <Link id="home" to="/" className="menu-item">
          Home
        </Link>
        <Link id="about" to="/about" className="menu-item">
          About
        </Link>
        {/* <Link id="Portfolio" to="/portfolio" className="menu-item">
          Portfolio
        </Link> */}
        <Link id="clients" to="/clients" className="menu-item">
          Clients
        </Link>
        <Link id="blog" to="/blog" className="menu-item">
          Blog
        </Link>
        <Link id="contact" to="/contact" className="menu-item">
          Contact
        </Link>
        <a
          id="store"
          href="https://society6.com/davidkstanley"
          className="menu-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store
        </a>
      </Menu>
    </StyledMobileNav>
  )
}

export default Nav
