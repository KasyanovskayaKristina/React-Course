import React from 'react';
import { Cards } from '../components/cards';
import InputForm from '../components/input';

class Home extends React.Component {
  render() {
    return (
      <div>
        <InputForm />
        <Cards />
      </div>
    );
  }
}

export default Home;
