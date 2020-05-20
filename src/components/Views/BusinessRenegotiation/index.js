import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const BusinessRenegotiation = () => {
  const title = "Renegociação especial para sua empresa";
  const description = "Fuja da falência renegociando a dívida da sua empresa.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "TBD",
      description: "TBD.",
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

export default BusinessRenegotiation;