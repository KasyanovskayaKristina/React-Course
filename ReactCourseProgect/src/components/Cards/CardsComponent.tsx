import React from 'react';
import db from '../../json/db.json';
import { Button } from '../Button/ButtonComponent';
import './CardComponent.css';
export class Cards extends React.Component {
  state = {
    products: db,
  };

  render() {
    return (
      <div className="main-container">
        <div className="block">
          {this.state.products.map((prod, id: number) => (
            <div key={id} className="card">
              <div>
                <img src={prod.thumbnail} className="img"></img>
              </div>
              <div className="info">
                <div className="title">{prod.title}</div>
                <div>Price: {prod.price}</div>
                <div>{prod.description}</div>
                <div>{prod['size-l']}</div>
                <div>{prod['size-m']}</div>
                <div>{prod['size-s']}</div>
                <div>{prod['size-xs']}</div>
                <div>{prod['size-xxl']}</div>
                <div className="tofee">{prod.category}</div>
                <Button />
                <h3>SHIPPING AND RETURNS</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
