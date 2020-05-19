import React from 'react';
import { NavLink } from 'react-router-dom';


import './styles.scss';

const Banner = ({ image, title, description, button }) => {
  const bgImg = require(`${image}`);
  return <div className="banner" style={{ backgroundImage: `url(${bgImg})` }}>
    <div className="content">
      <h1>{title}</h1>
      <h4>{description}</h4>
      {button !== undefined && <NavLink to={button.action}><button>{button.text}</button></NavLink>}
    </div>
  </div>
};

export default Banner;