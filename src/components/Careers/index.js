import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

import './styles.scss';

const Careers = () => {
  const title = "Seja parte da mudança";
  const description = "Estamos constantemente admitindo novas pessoas incríveis de diversas áreas para se tornarem parte da mudança. Você acha que têm o necessário para fazer parte do nosso time?";

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} />
  </div>;
};

export default Careers;