import React from 'react';

import OrganizationalChart from '../OrganizationalChart';
import CardList from '../CardList';

import './styles.scss';

const Step = ({ config }) => {
  switch (config.type) {
    default:
    case 'PLAIN_TEXT':
      config.content = config.description.split('\n').map(d => <h4 key={d}>{d}</h4>);
      break;
    case 'CHART':
      config.content = <OrganizationalChart />;
      break;
    case 'CARD_LIST':
      config.content = <CardList cards={config.cards} />
      break;
  }

  return <div className="step" style={{ backgroundColor: config.color, color: config.fontColor }}>
    <h1>{config.title}</h1>
    {config.content}
  </div >
};

export default Step;