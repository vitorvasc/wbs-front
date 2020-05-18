import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

import './styles.scss';

const Careers = () => {
  const title = "A disrupção digital";
  const description = "Você não para, e a gente também não. Uma equipe de profissionais extremamente qualificados sempre prontos para te auxiliar em qualquer ocasião.";

  return <div>
    <Header />
    <Banner image="./assets/homeBanner.png" title={title} description={description} />
  </div>;
}

export default Careers;