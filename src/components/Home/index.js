import React from 'react';
import Slider from 'react-slick';

import Header from '../Header';
import Banner from '../Banner';
import Card from '../Card';

import './styles.scss';
import Accordion from '../Accordion/Accordion';

const Home = () => {
  const title = "Bem-Vinda, Los Santos!";
  const description = "A excelência do maior e melhor banco de investimentos europeu, agora disponível em Los Santos.";

  const button = {
    text: "Abra sua conta",
    action: "/onboarding"
  };

  const cards = [
    {
      type: 'INFO',
      svg: './assets/invista.svg',
      title: 'Invista seu dinheiro',
      description: 'Conte com nossos corretores para lhe indicar a melhor opção de investimento na atualidade.',
    },
    {
      type: 'INFO',
      svg: './assets/taxa.svg',
      title: 'Taxas?',
      description: 'Nós não temos esta palavra em nosso dicionário. Nossos serviços são gratuitos.',
    },
    {
      type: 'INFO',
      svg: './assets/seguranca.svg',
      title: 'Segurança',
      description: 'Trabalhamos dia e noite para manter a garantia de seus investimentos.',
    },
  ]

  const accordion =
  {
    title: 'Soluções',
    items: [
      {
        title: 'Para você',
        subItems: [
          {
            title: 'Google',
            link: '/carreiras'
          },
          {
            title: 'Google',
            link: '/carreiras'
          },
          {
            title: 'Google',
            link: '/carreiras'
          },
        ]
      },
      {
        title: 'Para sua empresa',
        subItems: [
          {
            title: 'facebook',
            link: '/midia'
          },
          {
            title: 'facebook',
            link: '/midia'
          },
          {
            title: 'facebook',
            link: '/midia'
          },
        ]
      },
      {
        title: 'Veja também',
        subItems: [
          {
            title: 'pornhub',
            link: '/contato'
          },
          {
            title: 'pornhub',
            link: '/contato'
          },
          {
            title: 'pornhub',
            link: '/contato'
          },
        ]
      }
    ]
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          fade: true,
        }
      }
    ]
  }

  return <div>
    <Header />
    <Banner image="./assets/homeBanner.png" title={title} description={description} button={button} />
    <div className="container vantagens">
      <Slider {...sliderSettings}>
        {cards.map((c, index) => <Card key={index} config={c} />)}
      </Slider>
    </div>
    <Accordion title={accordion.title} items={accordion.items} />
  </div>;
};

export default Home;