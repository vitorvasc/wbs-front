import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const Careers = () => {
  const title = "Seja parte da mudança";
  const description = "Estamos constantemente admitindo novas pessoas incríveis de diversas áreas para se tornarem parte da mudança. Você acha que têm o necessário para fazer parte do nosso time?";

  const steps = [
    {
      type: 'CARD_LIST',
      title: "Venha inovar conosco",
      cards: [
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Analista de tecnologia',
          sector: 'Engenharia de software',
          creation: 'publicado 1 dia atrás',
          link: 'https://discord.gg/hH24xqW'
        },
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Gerente de risco de crédito',
          sector: 'Credit policies',
          creation: 'publicado 5 dias atrás',
          link: 'https://discord.gg/hH24xqW'
        },
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Estágio em equity research',
          sector: 'Investment banking',
          creation: 'publicado 2 semanas atrás',
          link: 'https://discord.gg/hH24xqW'
        },
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Analista de investimentos',
          sector: 'Investment banking',
          creation: 'publicado 3 semanas atrás',
          link: 'https://discord.gg/hH24xqW'
        },
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Analista de equities e renda fixa',
          sector: 'Mesa de operações',
          creation: 'publicado 1 mês atrás',
          link: 'https://discord.gg/hH24xqW'
        },
        {
          type: 'CAREER',
          location: 'USA | San Andreas - Los Santos',
          career: 'Nome do cargo da oportunidade',
          sector: 'Nome da área',
          creation: 'publicado 2 anos atrás',
          link: 'https://discord.gg/hH24xqW'
        }
      ],
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/placeholderBanner.png" title={title} description={description} />
    { steps.map((s, index) => <Step key={index} config={s} />) }
    <Footer />
  </div>;
};

export default Careers;