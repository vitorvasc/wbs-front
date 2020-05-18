import React from 'react';

import './styles.scss';

const Banner = ({image, title, description}) => (
  <div className="banner">
    <div className="content">
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>    
    <img src={require(`${image}`)}></img>
  </div>
);

export default Banner;