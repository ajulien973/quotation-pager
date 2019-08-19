import React from 'react';
import Devis from './devis';
import { getDevis } from '../../../repository/devis/devis.client';

const MAGICAL_TOKEN = 'JKusHl8Ba8MABIjdCtLZOe2lxxnUfX';

class DevisContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isLoaded: false,
      shouldBuildByLocations: false,
    };
  }

  toggleShouldBuildByLocations() {
    this.state.shouldBuildByLocations = !this.state.shouldBuildByLocations;
  }

  componentDidMount() {
    getDevis(MAGICAL_TOKEN)
      .then(data => this.setState({
        data,
        isLoaded: true,
      }));
  }

  render() {
    return <Devis
      data={this.state.data}
      shouldBuildByLocations={this.state.shouldBuildByLocations}
      toggleShouldBuildByLocations={this.toggleShouldBuildByLocations}
    />
  }
}

export default DevisContainer;
