import React from 'react';
import Header from '../../components/Header/HeaderComponent';
import './NotFoundPage.css';
const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <div>
          <Header />
        </div>
        <h1>Error 404 not found Page</h1>
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
