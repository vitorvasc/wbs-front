import React from 'react';
import axios from 'axios';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';
import PageLoader from '../../PageLoader';

import './styles.scss';

class BusinessPayroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.apiUrl = "http://localhost:3007/pages/businesspayroll"; // TODO externalizar configuração
  }

  componentDidMount() {
    axios({ method: 'get', url: `${this.apiUrl}` })
      .then(response => {
        this.setState({
          content: response.data
        });
      });
  }

  render() {
    if (!!this.state.content) {  
      return <div>
        <Header />
        <Banner image={this.state.content.image} title={this.state.content.title} description={this.state.content.description} button={this.state.content.button} />
        { this.state.content.steps.map((s, index) => <Step key={index} config={s}/>) }
        <Footer />
      </div>
    } else {
      return <PageLoader />;
    }
  }
};

export default BusinessPayroll;