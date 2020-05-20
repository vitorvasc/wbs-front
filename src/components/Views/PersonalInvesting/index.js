import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const PersonalInvesting = () => {
  const title = "O melhor investimento para você";
  const description = "Conte com a assessoria de economistas profissionais para alavancar seus ganhos.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Começe a investir com o valor de um donut",
      description: "Você sabia que pode começar investir com menos de $100? Abra sua conta conosco e explore as nossas opções de investimento, que vão desde o perfil " + 
      "mais conservador até o mais agressivo! Conte com a mentoria de nossos assessores de investimento para escolher a melhor opção que se encaixa em seu momento " +
      "de vida.",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/investingBanner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>
};

export default PersonalInvesting;