import React from 'react';

import logo from './assets/wbs.png';
import { ReactComponent as AccountIcon } from './assets/conta.svg';
import './styles.scss';

const Header = () => (
    <header id="main-header">
        <div className="container">
            <div className="row">
                <div className="col s2 logo">
                    <img src={logo} alt="WBS" />
                    <h5>WBS</h5>
                </div>
                <div className="col s6 links">
                    <a>Quem somos nós</a>
                    <a>Carreiras</a>
                    <a>Mídia</a>
                    <a>Contato</a>
                </div>
                <div className="col s4 conta">
                    <a><AccountIcon /> Acessar minha conta</a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;