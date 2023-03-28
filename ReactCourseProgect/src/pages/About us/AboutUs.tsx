import React from 'react';
import './AboutUs.css';
import Header from '../../components/Header/HeaderComponent';
export class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-page">
        <Header />
        <div className="about">
          <p>About Us Page</p>
        </div>
      </div>
    );
  }
}
