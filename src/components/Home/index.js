import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

import './styles.scss';

const Home = () => {
  const title = "Bem-Vinda, Los Santos!";
  const description = "A excelência do maior e melhor banco de investimentos europeu, agora disponível em Los Santos.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  return <div>
    <Header />
    <Banner image="./assets/homeBanner.png" title={title} description={description} button={button}/>
  </div>;
};

export default Home;