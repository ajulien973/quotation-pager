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
      shouldBuildByLocations: false,
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
      shouldBuildByLocations: false,
    })
  });

  it('should render a devis with the correct data', async () => {
    const wrapper = await shallow(<DevisContainer />);
    spyOn(wrapper.instance(), 'toggleShouldBuildByLocations');

    wrapper.find(Devis).props().toggleShouldBuildByLocations();

    expect(wrapper.find(Devis)).toHaveLength(1);
    expect(wrapper.find(Devis).props().data).toStrictEqual({ title: 'myDevis' });
    expect(wrapper.find(Devis).props().shouldBuildByLocations).toBe(false);
    expect(wrapper.instance().toggleShouldBuildByLocations).toHaveBeenCalled();
  });

  describe('toggleShouldBuildByLocations', () => {
    describe('when shouldBuildByLocations from state is TRUE', () => {
      it('should set it to FALSE', async () => {
        const wrapper = await shallow(<DevisContainer />);
        wrapper.setState({ shouldBuildByLocations: true });

        wrapper.instance().toggleShouldBuildByLocations();

        expect(wrapper.state().shouldBuildByLocations).toBe(false)
      });
    });

    describe('when shouldBuildByLocations from state is FALSE', () => {
      it('should set it to TRUE', async () => {
        const wrapper = await shallow(<DevisContainer />);
        wrapper.setState({ shouldBuildByLocations: false });

        wrapper.instance().toggleShouldBuildByLocations();

        expect(wrapper.state().shouldBuildByLocations).toBe(true)
      });
    });

  });
});
