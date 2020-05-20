import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const PersonalCredit = () => {
  const title = "Crédito acessível para você";
  const description = "A ajuda que você precisa para concretizar um sonho.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Receba seu dinheiro em poucas horas",
      description: "Deixou de comprar aquela propriedade ou aquele veículo com um super preço por falta de capital disponível? A gente oferece pra você o crédito mais barato " +
        "do mercado, com ótimas condições de pagamento.\n Você pode compor renda com outra pessoa e utilizar até o seu veículo como garantia para conseguir um " +
        "crédito maior, sabia? Abra sua conta e confira o seu limite pré-aprovado agora mesmo!",
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

export default PersonalCredit;