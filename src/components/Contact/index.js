import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

import './styles.scss';

const Contact = () => {
  const title = "Proximidade";
  const description = "Acreditamos que o seu relacionamento conosco deva ser o mais sincero e próximo o possível. Somos mais de 200 pessoas prontas para te auxiliar em qualquer ocasião, seja online ou tomando um cafézinho no nosso escritório. Como podemos te ajudar AGORA?";

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} />
  </div>;
};

export default Contact;