import React from 'react';

import { cms } from '../../../Axios';

import Header from '../../Header';
import Banner from '../../Banner';
import Step from '../../Step';
import Footer from '../../Footer';
import PageLoader from '../../PageLoader';

import './styles.scss';

class Midia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    cms.get('/pages/midia')
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
        { this.state.content.steps.map((s, index) => <Step key={index} config={s}/>) }
        <Footer />
      </div>;
    } else {
      return <PageLoader />;
    }
  }
};

export default Midia;