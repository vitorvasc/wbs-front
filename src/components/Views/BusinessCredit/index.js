import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const BusinessCredit = () => {
  const title = "Crédito acessível para sua empresa";
  const description = "A gente acredita no potencial do seu negócio.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Solicite uma avaliação da sua operação",
      description: "Crédito rápido e com ótimas condições de financiamento. Realizamos o financiamento de maquinários, propriedades e outros tipos de bens materiais " +
        "para sua empresa. Amplie a sua operação e atinja outros patamares em seu negócio.\nAbra sua conta, faça-nos uma visita e apresente o seu sonho!",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/creditBanner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>
};

export default BusinessCredit;