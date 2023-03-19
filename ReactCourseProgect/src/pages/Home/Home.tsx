import React from 'react'
import { Cards } from '../../components/Cards/CardsComponent'
import InputForm from '../../components/Search/Input'
import { Header } from '../../components/Header/HeaderComponent'
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <InputForm />
        <Cards />
      </div>
    )
  }
}

export default Home
