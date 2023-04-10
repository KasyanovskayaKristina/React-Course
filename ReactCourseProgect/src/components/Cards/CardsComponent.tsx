import './CardComponent.css';
import { CardsBlockProps } from '../interface/interface';

const Cards = ({ name, image, species }: CardsBlockProps) => {
  return (
    <div className="main-container">
      <div className="block">
        <div className="card">
          <div>
            <img src={image} className="img"></img>
          </div>
          <div className="info">
            <div className="title">{name}</div>
            <div>{species}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
