import React from 'react';
import axios from 'axios';

import config from '../../../config';

import Header from '../../Header';
import Banner from '../../Banner';
import Footer from '../../Footer';
import PageLoader from '../../PageLoader';

import './styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.apiUrl = `${config.cms.URL}/pages/contact`;
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
        <Banner image={this.state.content.image} title={this.state.content.title} description={this.state.content.description} />
        <Footer />
      </div>;
    } else {
      return <PageLoader />;
    }
  }
};

export default Contact;