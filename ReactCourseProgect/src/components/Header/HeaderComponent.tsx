import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { NotFound } from '../../pages/NotFound/NotFoundPage'
import { AboutUs } from '../../pages/About us/AboutUs'
import './Header.css'
export class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <nav className='header-nav'>
          <div>
            <Link to="/">Home</Link>
            <Link to="/AboutUs">About Us</Link>
          </div>
        </nav>
      </header>
    )
  }
}
