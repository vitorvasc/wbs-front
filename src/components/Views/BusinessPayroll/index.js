import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const BusinessPayroll = () => {
  const title = "Controle de folha de pagamento para sua empresa";
  const description = "Para você focar no que realmente importa.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Descubra como podemos operar o seu fluxo de caixa",
      description: "Controlamos todo o quadro de funcionários da sua empresa, os pagamentos, descontos e processos financeiros para que você " +
        "continue focando no que realmente importa: a expansão do seu negócio.\nAbra sua conta e deixa a gente te mostrar o que pode fazer por você.",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>
};

export default BusinessPayroll;