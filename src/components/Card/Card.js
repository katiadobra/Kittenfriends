import React from 'react';
import './Card.scss';

function Card(props) {
  const { data } = props;

  return (
    <div className="card tc">
      <div className="card__img">
        <img src={`https://robohash.org/${data.id}?set=set4`} alt="cats" />
      </div>
      <div className="card__name">
        {data.name}
      </div>
      <p>
        {data.email}
      </p>
    </div>
  );
}

export default Card;
