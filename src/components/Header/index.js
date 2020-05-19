import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './assets/wbs.png';
import { ReactComponent as AccountIcon } from './assets/conta.svg';
import MenuMobile from './MenuMobile';
import './styles.scss';

const Header = () => (
  <header id="main-header">
    <div className="container">
      <div className="row">
        <MenuMobile />
        
        <Link to="/">
          <div className="col s10 l2 logo">
            <img src={logo} alt="WBS" />
            <h5>WBS</h5>
          </div>
        </Link>
        <div className="col l6 hide-on-med-and-down links">
          <NavLink to="/quem-somos-nos" activeClassName="nav-selected">Quem somos nós</NavLink>
          <NavLink to="/carreiras" activeClassName="nav-selected">Carreiras</NavLink>
          <NavLink to="/midia" activeClassName="nav-selected">Mídia</NavLink>
          <NavLink to="/contato" activeClassName="nav-selected">Contato</NavLink>
        </div>
        <div className="col l4 hide-on-med-and-down conta">
          <NavLink to="/minha-conta" activeClassName="nav-selected"><AccountIcon /> Acessar minha conta</NavLink>
        </div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;