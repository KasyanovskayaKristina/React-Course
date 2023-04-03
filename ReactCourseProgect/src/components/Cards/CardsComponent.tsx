import React from 'react';
import db from '../../json/db.json';
import Button from '../Button/ButtonComponent';
import './CardComponent.css';

const Cards = () => {
  const cards = db;
  return (
    <div className="main-container">
      <div className="block">
        {cards.map((card, id: number) => (
          <div key={id} className="card">
            <div>
              <img src={card.thumbnail} className="img"></img>
            </div>
            <div className="info">
              <div className="title">{card.title}</div>
              <div>Price: {card.price}</div>
              <div>{card.description}</div>
              <div>{card['size-l']}</div>
              <div>{card['size-m']}</div>
              <div>{card['size-s']}</div>
              <div>{card['size-xs']}</div>
              <div>{card['size-xxl']}</div>
              <div className="tofee">{card.category}</div>
              <Button />
              <h3>SHIPPING AND RETURNS</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
