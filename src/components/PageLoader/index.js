import React from 'react';

import './styles.scss';

import gif from './assets/loader.gif';


const PageLoader = () => {
    return <div className="loader">
        <img src={gif} alt="Carregando..."/>
        <span>Aguarde, carregando...</span>
    </div>;
};

export default PageLoader;