import React from 'react';

import './styles.scss';

const Card = ({ config }) => {
  switch (config.type) {
    default:
    case 'INFO':
      const svgIcon = require(`${config.svg}`)
      return <div className="item-info">
        <img src={svgIcon} alt={config.title} />
        <h6>{config.title}</h6>
        <p>{config.description}</p>
      </div>
    case 'CAREER':
      return <div className="item-career">        
        <h6>{config.location}</h6>
        <p>{config.career}</p>
        <p>{config.section}</p>
        <p>{config.creation}</p>
      </div>
  }
}

export default Card;