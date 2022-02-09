import React, { useEffect } from 'react'
import Link from 'gatsby-link'
import { MdMenu } from 'react-icons/md'
import { bubble as Menu } from 'react-burger-menu'
import stickybits from 'stickybits'

function NavBar() {
  useEffect(() => {
    stickybits('.navbar', { useStickyClasses: true })
  })

  return (
    <div className="navbar">
      <div className="nav-desktop container">
        <Link to="/" className="menu-item" activeClassName="menu-item--active">
          Introduction
        </Link>
        <Link to="/profile/" className="menu-item" activeClassName="menu-item--active">
          About Me
        </Link>
        <Link to="/resume/" className="menu-item" activeClassName="menu-item--active">
          Resume
        </Link>
        {/* <Link
          to="/work/"
          className="menu-item"
          activeClassName="menu-item--active">
          Work
        </Link> */}
        <Link to="/blog/" className="menu-item" activeClassName="menu-item--active">
          Blog
        </Link>

        {/* <Link to="/contact/" className="menu-item menu-item--has-btn" activeClassName="menu-item--active">
          <button className="btn" type="button">
            Contact Me
          </button>
        </Link> */}

        <div className="menu-item menu-item--has-btn menu-item--active">
          <a className="btn" href="mailto:philippwalter@pm.me">
            Contact Me
          </a>
        </div>
      </div>

      <div className="nav-mobile container">
        <Menu
          right
          isOpen={false}
          customBurgerIcon={<MdMenu className="menu-toggle" />}
          pageWrapId="content"
          outerContainerId="wrapper"
        >
          <Link to="/" className="menu-item" activeClassName="menu-item--active">
            Introduction
          </Link>
          <Link to="/profile/" className="menu-item" activeClassName="menu-item--active">
            About Me
          </Link>
          <Link to="/resume/" className="menu-item" activeClassName="menu-item--active">
            Resume
          </Link>
          {/* <Link
            to="/work/"
            className="menu-item"
            activeClassName="menu-item--active">
            Work
          </Link> */}
          <Link to="/blog/" className="menu-item" activeClassName="menu-item--active">
            Blog
          </Link>

          {/* <Link to="/contact/" className="menu-item" activeClassName="menu-item--active">
            Contact
          </Link> */}

          <a className="menu-item" href="mailto:philippwalter@pm.me">
            Contact Me
          </a>
        </Menu>
      </div>
    </div>
  )
}

export default NavBar
