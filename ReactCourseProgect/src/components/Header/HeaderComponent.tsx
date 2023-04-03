import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  let currentPageTitle = '';

  switch (pathname) {
    case '/':
      currentPageTitle = 'Home Page';
      break;
    case '/AboutUs':
      currentPageTitle = 'About Us Page';
      break;
    case '/Form':
      currentPageTitle = 'Form Page';
  }
  return (
    <header className="header">
      <nav>
        <div className="header-nav">
          <Link to="/" className="nav">
            Home
          </Link>
          <Link to="/AboutUs" className="nav">
            About Us
          </Link>
          <Link to="/Form" className="nav">
            Form
          </Link>
        </div>
      </nav>
      <p> Visiting: {currentPageTitle}</p>
    </header>
  );
};

export default Header;
