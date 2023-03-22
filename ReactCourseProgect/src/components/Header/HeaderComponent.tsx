import React from 'react';
import { Link, NavigateFunction } from 'react-router-dom';
import './Header.css';
class Header extends React.Component<{
  navigate: NavigateFunction;
  location: string;
}> {
  render(): React.ReactNode {
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
          </div>
        </nav>
        <p className="path">{this.props.location.slice(1, this.props.location.length)}</p>
      </header>
    );
  }
}
export default Header;
