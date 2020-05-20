import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const About = () => {
  const title = "A disrupção digital";
  const description = "Você não para, e a gente também não. Uma equipe de profissionais extremamente qualificados sempre prontos para te auxiliar em qualquer ocasião.";

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Quem somos nós",
      description: "Somos um banco de investimentos de gestão de fortunas com mais de 150 anos de existência. Nosso foco principal é trazer ao nosso cliente o melhor atendimento do mercado e os melhores produtos disponíveis no ramo de serviços financeiros. \n" +
        "Oferecemos serviços desde a administração de fundos de renda fixa à assessoria direta de investimentos em equities mundiais, rentabilizando da melhor maneira o patrimônio do nosso cliente, alinhados sempre com os perfis de risco que cada pessoa têm, em respeito ao seu momento de vida atual. \n" +
        "Contamos com profissionais altamente capacitados para gerir os recursos de nossos clientes, entendendo sempre a necessidade pessoal.",
      color: "#DB0011",
      fontColor: "white"
    },
    {
      type: 'CHART',
      title: "Board Executivo",
      cards: [
        {
          type: 'CHART',
          image: './assets/georgetheiss.png',
          name: 'George Theiss',
          rank: 'Chief Executive Officer',
          description: 'Banqueiro suíço e ex-operador de ações. Com um patrimônio líquido estimado em 65 bilhões de dólares, Theiss detém atualmente o fundo de equities mais performático da última década.'
        },
        {
          type: 'CHART',
          image: './assets/richardowens.png',
          name: 'Ricard Owens',
          rank: 'Chief Financial Officer',
          description: 'Norte-americano e empreendedor, Owens se formou em Economia pela Universidade de Harvard e se tornou um dos Forbes 30 Under 30 após vender sua start-up, Cash4U, por um valor de aproximadamente 46 milhões de dólares.'
        },
        {
          type: 'CHART',
          image: './assets/georgetheiss.png',
          name: 'John Doe',
          rank: 'Chief Operating Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur sed arcu vitae dapibus. Ut id pharetra eros. In ullamcorper quam ut mauris ornare commodo. Maecenas aliquam.'
        },
        {
          type: 'CHART',
          image: './assets/georgetheiss.png',
          name: 'Andy Firestone',
          rank: 'Chief Information Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur sed arcu vitae dapibus. Ut id pharetra eros. In ullamcorper quam ut mauris ornare commodo. Maecenas aliquam.'
        }
      ],
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/aboutBanner.png" title={title} description={description} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>;
};

export default About;