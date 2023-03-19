import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import { NotFound } from '../../pages/NotFoundPage'
import { AboutUs } from '../../pages/About us/AboutUs'
export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/NotFound">Not Found</Link>
            <Link to="/AboutUs">About Us</Link>
          </div>
        </nav>
      </header>
    )
  }
}
