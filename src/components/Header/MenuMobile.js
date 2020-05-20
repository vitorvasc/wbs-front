import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as MenuMobileIcon } from './assets/menumobile.svg';
import './styles.scss';

const MenuMobile = () => {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');

    const content = useRef(null);

    function toggleMenuMobile() {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    }

    return <div className="menu-mobile">
        <div className={`icon ${setActive}`} onClick={toggleMenuMobile}>
            <MenuMobileIcon />
        </div>

        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="categories">
            <NavLink to="/quem-somos-nos" activeClassName="nav-selected">Quem somos nós</NavLink>
            <NavLink to="/carreiras" activeClassName="nav-selected">Carreiras</NavLink>
            <NavLink to="/midia" activeClassName="nav-selected">Mídia</NavLink>
            <NavLink to="/contato" activeClassName="nav-selected">Contato</NavLink>
        </div>
    </div>
}

export default MenuMobile;