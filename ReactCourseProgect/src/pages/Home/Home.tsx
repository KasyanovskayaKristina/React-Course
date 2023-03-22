import React from 'react';
import { Cards } from '../../components/Cards/CardsComponent';
import Header from '../../components/Header/HeaderComponent';
import InputForm from '../../components/Search/Input';
import './Home.css';
class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <InputForm />
        <Cards />
      </div>
    );
  }
}

export default Home;
