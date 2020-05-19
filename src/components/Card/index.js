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
        <a href={config.link} target="_blank" rel="noopener noreferrer">
          <h6>{config.location}</h6>
          <h5>{config.career}</h5>
          <h6>{config.sector}</h6>
          <span>{config.creation}</span>
        </a>
      </div>
  }
}

export default Card;