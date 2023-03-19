import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import InputForm from '../Search/Input';
export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <InputForm />
        <nav>
          <div className="header-nav">
            <Link to="/" className="nav">
              Home
            </Link>
            <Link to="/AboutUs" className="nav">
              About Us
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
