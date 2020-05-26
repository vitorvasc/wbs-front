import React from 'react';
import Slider from 'react-slick';

import { cms } from '../../../Axios';

import Header from '../../Header';
import Banner from '../../Banner';
import Card from '../../Card';
import Footer from '../../Footer';
import PageLoader from '../../PageLoader';

import './styles.scss';
import Accordion from '../../Accordion/Accordion';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    cms.get('/pages/home')
      .then(response => {
        this.setState({
          content: response.data
        });
      });
  }

  render() {
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
    };

    if (!!this.state.content) {
      return <div>
        <Header />
        <Banner image={this.state.content.image} title={this.state.content.title} description={this.state.content.description} button={this.state.content.button} />
        <div className="container">
          <Slider {...sliderSettings}>
            {this.state.content.cards.map((c, index) => <Card key={index} config={c} />)}
          </Slider>
        </div>
        <Accordion title={this.state.content.accordion.title} items={this.state.content.accordion.items} />
        <Footer />
      </div>;
    } else {
      return <PageLoader />;
    }
  }
};

export default Home;