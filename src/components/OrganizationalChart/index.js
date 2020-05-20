import React from 'react';

import Card from '../Card';

import './styles.scss';

const OrganizationalChart = ({cards}) => {

  const first = cards.shift();

  return <div className="container chart">
    <div className="row">      
      <Card config={first} />      
    </div>
    <div className="row">
        { cards.map((p, index) => <Card key={index} config={p} />) }
    </div>
  </div>
};

export default OrganizationalChart;