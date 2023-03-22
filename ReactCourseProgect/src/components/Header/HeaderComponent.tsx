import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
interface HeaderProps {
  currentPage?: string;
}

interface HeaderState {
  currentPageTitle: string;
}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      currentPageTitle: '',
    };
  }
  updatePageTitle = () => {
    const { pathname } = window.location;
    let currentPageTitle = '';

    switch (pathname) {
      case '/':
        currentPageTitle = 'Home Page';
        break;
      case '/AboutUs':
        currentPageTitle = 'About Us Page';
        break;
      default:
        currentPageTitle = '';
    }

    if (this.props.currentPage) {
      currentPageTitle = this.props.currentPage;
    }

    this.setState({
      currentPageTitle,
    });
  };

  componentDidMount() {
    this.updatePageTitle();
  }

  componentDidUpdate(prevProps: HeaderProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.updatePageTitle();
    }
  }
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
        <div className="current-page-header">
          <p>{this.state.currentPageTitle}</p>
        </div>
      </header>
    );
  }
}
export default Header;
