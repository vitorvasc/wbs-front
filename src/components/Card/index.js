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
      return <div className="box-career">
        <div className="item-career">
          <a href={config.link} target="_blank" rel="noopener noreferrer">
            <h6 className="location">{config.location}</h6>
            <h5>{config.career}</h5>
            <h6>{config.sector}</h6>
            <span>{config.creation}</span>
          </a>
        </div>
      </div>
    case 'CHART':
      const photo = require(`${config.image}`)
      return <div className="item-chart">
        <img src={photo} alt={config.name} />
        <h5>{config.name}</h5>
        <span>{config.rank}</span>
        <p>{config.description}</p>
      </div>
  }
}

export default Card;