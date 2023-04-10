import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/CardsComponent';
import Header from '../../components/Header/HeaderComponent';
import InputForm from '../../components/Search/Input';
import './Home.css';
import axios from 'axios';
import { CardsBlockProps } from '../../components/interface/interface';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
const Home = () => {
  const [cards, setCards] = React.useState([]);
  const [modalActive, SetModalActive] = useState<boolean>(false);
  const [running, SetRunning] = useState(0);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => setCards(res.data.results));
  }, []);

  return (
    <div className="main">
      <Header />
      <InputForm />
      {cards.map((card: CardsBlockProps) => (
        <div
          key={card.id}
          onClick={() => {
            SetModalActive(true);
            SetRunning(card.id);
          }}
        >
          <Cards
            id={card.id}
            name={card.name}
            image={card.image}
            species={card.species}
            gender={card.gender}
            status={card.status}
            created={card.created}
            episode={card.episode}
          />
        </div>
      ))}
      {modalActive ? (
        <ModalWindow id={running} active={modalActive} SetActive={SetModalActive} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
