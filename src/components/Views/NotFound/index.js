import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const NotFound = () => {
  const title = "Ooops";
  const description = "Acho que você está perdido, cowboy. Como veio parar aqui mesmo?";

  const button = {
    text: "Voltar à civilização",
    action: "/"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "404",
      description: "Esta página não existe. Pedimos desculpa se te redirecionamos pra cá!",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/404Banner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>;
};

export default NotFound;