import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Banner = ({image, title, description, button}) => {
  return <div className="banner">
    <div className="content">
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>    
    <img src={require(`${image}`)}></img>
    {button !== undefined && <NavLink to={button.action}><button>{button.text}</button></NavLink>}
  </div>
};

export default Banner;