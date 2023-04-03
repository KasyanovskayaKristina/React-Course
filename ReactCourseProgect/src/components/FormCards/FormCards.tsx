import React from 'react';
import { Cards } from '../../types/types';
import './FormCards.css';
const FormCards = ({ firstName, date, country, avatar }: Cards) => {
  return (
    <div>
      <div>
        <h1>Submit a New Card</h1>
        <div className="cards-form">
          <p className="title-cards">Name: {firstName}</p>
          <p className="title-cards">Birthday: {date}</p>
          <p className="title-cards">Country: {country}</p>
          <img src={URL.createObjectURL(avatar)} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default FormCards;
