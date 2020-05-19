import React from 'react';

import AccordionItem from './AccordionItem';

import './styles.scss';

const Accordion = ({ title, items }) => {
    return <div className="container accordion">
        <h4>{title}</h4>
        {items.map((i, index) => <AccordionItem key={index} title={i.title} items={i.subItems} />)}
    </div>
}

export default Accordion;