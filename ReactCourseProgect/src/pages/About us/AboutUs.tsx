import React from 'react';
import { Header } from '../../components/Header/HeaderComponent';
import './AboutUs.css';
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
