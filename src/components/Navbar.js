import React from 'react'
import Link from 'gatsby-link'
import MdMenu from 'react-icons/lib/md/menu'
import { bubble as Menu } from 'react-burger-menu'

const NavBar = () => (
  <div className="navbar">
    <div className="nav-desktop container">
      <Link
        to="/"
        exact
        className="menu-item"
        activeClassName="menu-item--active">
        Introduction
      </Link>
      <Link
        to="/profile/"
        className="menu-item"
        activeClassName="menu-item--active">
        Profile
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
          Profile
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
