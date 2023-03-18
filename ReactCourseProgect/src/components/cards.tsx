import React, { Component } from 'react';
import db from '../json/db.json';
import { Button } from './button';
console.log(db);

export class Cards extends React.Component {
  state = {
    products: db,
  };

  render() {
    return (
      <div>
        {this.state.products.map((prod, id: number) => (
          <div key={id}>
            <div>
              <img src={prod.thumbnail}></img>
            </div>
            <div>
              <div>{prod.title}</div>
              <div>{prod.price}</div>
              <div>{prod.description}</div>
              <div>{prod['size-l']}</div>
              <div>{prod['size-m']}</div>
              <div>{prod['size-s']}</div>
              <div>{prod['size-xs']}</div>
              <div>{prod['size-xxl']}</div>
              <div>{prod.category}</div>
              <Button />
              <h3>SHIPPING AND RETURNS</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
