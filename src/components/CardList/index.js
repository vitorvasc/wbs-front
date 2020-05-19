import React from 'react';

import Card from '../Card';

import './styles.scss';

const CardList = ({cards}) => (
  <div>
    { cards.map(c => <Card key={c} config={c} />)}
  </div>
);

export default CardList;