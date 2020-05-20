import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const BusinessInvesting = () => {
  const title = "O melhor investimento para sua empresa";
  const description = "Proteja o seu capital e trabalhe tranquilo.";

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
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} button={button} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>
};

export default BusinessInvesting;