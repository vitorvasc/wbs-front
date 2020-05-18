import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

import './styles.scss';

const Midia = () => {
  const title = "Dinamicidade";
  const description = "Vivemos em um mundo cada vez mais conectado, onde as notícias percorrem o globo com cada vez mais velocidade. Como estas notícias podem afetar os seus investimentos?";

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} />
  </div>;
};

export default Midia;