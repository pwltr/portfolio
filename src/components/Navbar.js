import React from 'react'
import { withPrefix } from 'gatsby'
import Link from 'gatsby-link'
import { MdMenu } from 'react-icons/md'
import { bubble as Menu } from 'react-burger-menu'

const NavBar = () => (
  <div className="navbar">
    <div className="nav-desktop container">
      <Link
        to="/"
        className="menu-item"
        activeClassName="menu-item--active">
        Introduction
      </Link>
      <Link
        to="/profile/"
        className="menu-item"
        activeClassName="menu-item--active">
        About Me
      </Link>
      <a
        className="menu-item"
        href={withPrefix('/cv-philippwalter.pdf')}
        target="_blank"
        rel="noopener">
        Resume
      </a>
      {/* <Link
        to="/work/"
        className="menu-item"
        activeClassName="menu-item--active">
        Work
      </Link> */}
      <Link
        to="/blog/"
        className="menu-item"
        activeClassName="menu-item--active">
        Blog
      </Link>
      <Link
        to="/contact/"
        className="menu-item menu-item--has-btn"
        activeClassName="menu-item--active">
        <button className="btn">Hire Me</button>
      </Link>
    </div>

    <div className="nav-mobile container">
      <Menu
        right
        isOpen={false}
        customBurgerIcon={<MdMenu className="menu-toggle" />}
        pageWrapId={'content'}
        outerContainerId={'wrapper'}
      >
        <Link
          to="/"
          className="menu-item"
          activeClassName="menu-item--active">
          Introduction
        </Link>
        <Link
          to="/profile/"
          className="menu-item"
          activeClassName="menu-item--active">
          About Me
        </Link>
        <Link
          to="/work/"
          className="menu-item"
          activeClassName="menu-item--active">
          Work
        </Link>
        <Link
          to="/blog/"
          className="menu-item"
          activeClassName="menu-item--active">
          Blog
        </Link>
        <Link
          to="/contact/"
          className="menu-item"
          activeClassName="menu-item--active">
          Contact
        </Link>
      </Menu>
    </div>
  </div>
)

export default NavBar
