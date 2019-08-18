import React from 'react';
import { shallow } from 'enzyme';

import * as devisClient from '../../../repository/devis/devis.client';
import DevisContainer from './devis.container';
import Devis from './devis';


describe('components | pages | DevisContainer', () => {
  beforeEach(() => {
    jest.spyOn(devisClient, 'getDevis').mockResolvedValue({title: 'myDevis'});
  });

  afterEach(() => {
    devisClient.getDevis.mockRestore();
  });

  it('should initialize container state', () => {
    const wrapper = shallow(<DevisContainer />);
    expect(wrapper.state()).toStrictEqual({
      data: {},
      isLoaded: false,
    })
  });

  it('should fetch devis and set state with response', async () => {
    const wrapper = await shallow(<DevisContainer />);
    expect(devisClient.getDevis).toHaveBeenCalledTimes(1)
    expect(wrapper.state()).toStrictEqual({
      data: {
        title: 'myDevis'
      },
      isLoaded: true,
    })
  });

  it('should render a devis with the correct data', async () => {
    const wrapper = await shallow(<DevisContainer/>);
    expect(wrapper.find(Devis)).toHaveLength(1);
    expect(wrapper.find(Devis).props()).toStrictEqual({
      data: {
        title: 'myDevis',
      },
    });
  });
});
