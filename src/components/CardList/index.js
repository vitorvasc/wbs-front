import React from 'react';

import Card from '../Card';

import './styles.scss';

const CardList = ({cards}) => (
  <div>
    { cards.map((c, index) => <Card key={index} config={c} />)}
  </div>
);

export default CardList;