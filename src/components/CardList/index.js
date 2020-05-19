import React from 'react';

import Card from '../Card';

import './styles.scss';

const CardList = ({cards}) => (
  <div className="container">
    <div className="cardlist">
      { cards.map((c, index) => <Card key={index} config={c} />)}
    </div>
  </div>
);

export default CardList;