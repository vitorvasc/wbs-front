import React from 'react';

import Header from '../Header';
import Banner from '../Banner';
import Step from '../Step';

import './styles.scss';

const About = () => {
  const title = "A disrupção digital";
  const description = "Você não para, e a gente também não. Uma equipe de profissionais extremamente qualificados sempre prontos para te auxiliar em qualquer ocasião.";

  const steps = [
    {
      title: "Quem somos nós",
      description: "Somos um banco de investimentos de gestão de fortunas com mais de 150 anos de existência. Nosso foco principal é trazer ao nosso cliente o melhor atendimento do mercado e os melhores produtos disponíveis no ramo de serviços financeiros. \n" +
      "Oferecemos serviços desde a administração de fundos de renda fixa à assessoria direta de investimentos em equities mundiais, rentabilizando da melhor maneira o patrimônio do nosso cliente, alinhados sempre com os perfis de risco que cada pessoa têm, em respeito ao seu momento de vida atual. \n" +
      "Contamos com profissionais altamente capacitados para gerir os recursos de nossos clientes, entendendo sempre a necessidade pessoal.",
      color: "#DB0011",
      fontColor: "white"
    },
    {
      title: "Board Executivo",
      description: "TBD",
      color: "white",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} />
    { steps.map(s => <Step key={s} title={s.title} description={s.description} color={s.color} fontColor={s.fontColor} />) }
  </div>;
};

export default About;