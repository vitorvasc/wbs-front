import React from 'react';

import { cms } from '../../../Axios';

import Header from '../../Header';
import Banner from '../../Banner';
import Footer from '../../Footer';
import PageLoader from '../../PageLoader';

import './styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    cms.get('/pages/contact')
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