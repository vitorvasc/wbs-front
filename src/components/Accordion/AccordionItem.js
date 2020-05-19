import React, { useState, useRef } from 'react';

import './styles.scss';
import { ReactComponent as AccordionIcon } from './assets/icon.svg';

import { NavLink } from 'react-router-dom';

const AccordionItem = ({ title, items }) => {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(setActive === 'active' ? '0px': `${content.current.scrollHeight}px`);
    }

    return <div className="item">
        <div className={`title ${setActive}`} onClick={toggleAccordion}>
            <h5>{title}</h5>
            <AccordionIcon />
        </div>
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="content">
            {items.map((i, index) => <NavLink key={index} to={i.link}><span>{i.title}</span></NavLink>)}
        </div>
    </div>
}

export default AccordionItem;