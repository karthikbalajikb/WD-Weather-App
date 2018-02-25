import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import App from './App';
import WeatherCard from './container/weatherCard/WeatherCard';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Initial State ', () => {
    it('city state should be null', () => {
      const shallowMUI = createShallow({ dive: true });
      const wrap = shallowMUI(<App />);
      const cityState = wrap.state('city');
      expect(cityState).toEqual(null);
    });

    it('Select a city from dropdown text should be rendered', () => {
      const wrapper = mount(<App />);
      const Typography = wrapper.find('Typography').last();
      expect(Typography.text()).toEqual(' Select a city from dropdown ');
    });
  });

  describe('When city is selected', () => {
    let wrap;

    beforeEach(() => {
      const shallowMUI = createShallow({ dive: true });
      wrap = shallowMUI(<App />);
      wrap.instance().selectedCity('Bangalore');
    });

    it('city state should not be null', () => {
      expect(wrap.state('city')).toEqual('Bangalore');
    });

    it('WeatherCard component should be loaded', () => {
      wrap.update();
      const WeatherCardComp = wrap.find(WeatherCard);
      expect(WeatherCardComp.length).toEqual(1);
    });
  });
});
