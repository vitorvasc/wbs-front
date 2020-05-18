import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './assets/wbs.png';
import { ReactComponent as AccountIcon } from './assets/conta.svg';
import './styles.scss';

const Header = () => (
  <header id="main-header">
    <div className="container">
      <div className="row">
        <Link to="/">
          <div className="col s2 logo">
            <img src={logo} alt="WBS" />
            <h5>WBS</h5>
          </div>
        </Link>
        <div className="col s6 links">
          <NavLink to="/quem-somos-nos" activeClassName="nav-selected">Quem somos nós</NavLink>
          <NavLink to="/carreiras" activeClassName="nav-selected">Carreiras</NavLink>
          <NavLink to="/midia" activeClassName="nav-selected">Mídia</NavLink>
          <NavLink to="/contato" activeClassName="nav-selected">Contato</NavLink>
        </div>
        <div className="col s4 conta">
          <NavLink to="/minha-conta" activeClassName="nav-selected"><AccountIcon /> Acessar minha conta</NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;