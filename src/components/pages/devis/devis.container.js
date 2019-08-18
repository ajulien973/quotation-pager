import React from 'react';
import Devis from './devis';
import { getDevis } from '../../../repository/devis/devis.client';


class DevisContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    getDevis()
      .then(data => this.setState({
        data,
        isLoaded: true,
      }));
  }

  render() {
    return <Devis data={this.state.data} />
  }
}

export default DevisContainer;
