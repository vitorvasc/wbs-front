import React from 'react';

import './styles.scss';

const Card = ({ config }) => {
  switch (config.type) {
    default:
    case 'INFO':      
      return <div className="item-info">
        <img src={config.svg} alt={config.title} />
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
      return <div className="item-chart">
        <img src={config.image} alt={config.name} />
        <h5>{config.name}</h5>
        <span>{config.rank}</span>
        <p>{config.description}</p>
      </div>
  }
}

export default Card;