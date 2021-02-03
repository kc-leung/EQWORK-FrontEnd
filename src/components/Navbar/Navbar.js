import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { navbarArray } from '../../data/contants';

import './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="title">
          <Link to='/'>Kc Leung - Assessment</Link>
        </div>
        <div className="menuContainer">
          {navbarArray.map((data, itemIndex) => {
            return (
              <div key={`navItem-${itemIndex}`} className="navbarItem">
                <Link to={data.link}>{data.title}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Navbar;
