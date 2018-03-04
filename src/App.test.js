import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
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
      const wrap = shallow(<App />);
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
      wrap = shallow(<App />);
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
