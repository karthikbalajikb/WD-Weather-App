import React from 'react';
import { mount } from 'enzyme';
import WDAppBar from './AppBar';

describe('Component : WDAppBar', () => {
  let wrapper;
  let mock;

  beforeEach(() => {
    mock = jest.fn();
    wrapper = mount(<WDAppBar selectedCity={mock} />);
  });

  it('Title text should be : WD Weather App', () => {
    const TypographyComp = wrapper.find('Typography');
    expect(TypographyComp.text()).toEqual('WD Weather App');
  });

  it('App Bar should receive selected city callback from WDAutoSearchSelect', () => {
    wrapper.instance().myCallback('Bangalore');
    expect(mock).toHaveBeenCalledWith('Bangalore');
  });
});
