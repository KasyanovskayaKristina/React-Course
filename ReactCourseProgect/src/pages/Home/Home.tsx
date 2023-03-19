import React from 'react';
import { Cards } from '../../components/Cards/CardsComponent';
import { Header } from '../../components/Header/HeaderComponent';
import './Home.css';
class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default Home;
