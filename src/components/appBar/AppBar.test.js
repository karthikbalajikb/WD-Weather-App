import React from 'react';
import { createShallow } from 'material-ui/test-utils';
import { mount } from 'enzyme';
import WDAppBar from './AppBar';

describe('Component : WDAppBar', () => {
  let shallowMUI;
  let mock;

  beforeEach(() => {
    shallowMUI = createShallow({ dive: true });
    mock = jest.fn();
  });

  it('Renders app bar without crashing', () => {
    shallowMUI(<WDAppBar selectedCity={mock} />);
  });

  it('Title text should be : WD Weather App', () => {
    const wrapper = mount(<WDAppBar selectedCity={mock} />);
    const Typography = wrapper.find('Typography');
    expect(Typography.text()).toEqual('WD Weather App');
  });

  it('App Bar should receive selected city callback from WDAutoSearchSelect', () => {
    const wrapper = shallowMUI(<WDAppBar selectedCity={mock} />);
    wrapper.instance().myCallback('Bangalore');
    expect(mock).toHaveBeenCalledWith('Bangalore');
  });
});
