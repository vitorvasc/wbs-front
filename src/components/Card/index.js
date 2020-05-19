import React from 'react';

import './styles.scss';

const Card = ({svg, title, description}) => {
    const svgIcon = require(`${svg}`)
    return <div className="item">
        <img src={svgIcon} alt={title} />
        <h6>{title}</h6>
        <p>{description}</p>
    </div>
}

export default Card;