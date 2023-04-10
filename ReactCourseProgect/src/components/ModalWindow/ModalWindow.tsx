import { useEffect, useState } from 'react';
import '../ModalWindow/ModalWindow.css';
import { CardsBlockProps } from '../interface/interface';
import axios from 'axios';
import { Info } from '../../types/types';
const ModalWindow = ({ id, active, SetActive }: Info) => {
  const [details, setDetails] = useState<CardsBlockProps>();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setDetails(res.data));
  });
  return (
    <div
      className={active ? 'modal__window active' : 'modal__window'}
      onClick={() => SetActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={details?.image} className="img"></img>
        <p className="details">Gender: {details?.gender}</p>
        <p className="details">Status: {details?.status}</p>
        <p className="details">Species: {details?.species}</p>
        <p className="details">Episode: {details?.episode.length}</p>
        <div className="details">Created: {details?.created}</div>
      </div>
    </div>
  );
};
export default ModalWindow;
