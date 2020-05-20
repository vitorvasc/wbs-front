import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const PersonalRenegotiation = () => {
  const title = "Renegociação especial para você";
  const description = "Quebre sua dívida em parcelas que cabem no seu bolso e não deixe que o seu nome fique sujo.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Seu padrão de vida não está mais comportando sua dívida?",
      description: "Renegocie a sua dívida conosco e diminua o valor de suas parcelas para que você possa continuar focando o seu dinheiro no que realmente importa. \n" +
        "Abra já sua conta e entre em contato com um de nossos analistas para formular uma proposta.",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/renegotiationBanner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>
};

export default PersonalRenegotiation;