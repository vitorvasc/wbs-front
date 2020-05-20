import React from 'react';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';

import './styles.scss';

const Midia = () => {
  const title = "Dinamicidade";
  const description = "Vivemos em um mundo cada vez mais conectado, onde as notícias percorrem o globo com cada vez mais velocidade. Como estas notícias podem afetar os seus investimentos?";

  const steps = [
    {
      type: 'PLAIN_TEXT',
      title: "Em breve...",
      description: "...você poderá acompanhar as últimas notícias políticas e econômicas de Los Santos e do mundo em tempo real para que possa tomar a melhor decisão em seus investimentos.",
      color: "#FFFFFF",
      fontColor: "black"
    }
  ];

  return <div>
    <Header />
    <Banner image="./assets/midiaBanner.png" title={title} description={description} />
    { steps.map((s, index) => <Step key={index} config={s}/>) }
    <Footer />
  </div>;
};

export default Midia;