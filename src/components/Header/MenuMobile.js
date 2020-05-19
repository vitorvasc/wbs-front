import React from 'react';

import { ReactComponent as MenuMobileIcon } from './assets/menumobile.svg';
import './styles.scss';

const MenuMobile = () => (
    <div className="col s2 hide-on-med-and-up menu-mobile">
        <MenuMobileIcon />
    </div>
);

export default MenuMobile;