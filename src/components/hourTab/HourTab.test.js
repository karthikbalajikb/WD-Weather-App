import React from 'react';
import { shallow } from 'enzyme';
import WDHourTab from './HourTab';

describe('Component : WDHourTab', () => {
  const hourWeatherReport = [
    {
      dateTime: '212324345',
      dt: '09 Feb 2018',
      temp_max: 23,
      description: 'test',
      humidity: 100,
      wind: 20,
      icon: 'ss',
    },
    {
      dateTime: '212324346',
      dt: '10 Feb 2018',
      temp_max: 43,
      description: 'test 222',
      humidity: 90,
      wind: 30,
      icon: 'dd',
    },
  ];

  it('Renders without crashing', () => {
    shallow(<WDHourTab hourWeatherReport={hourWeatherReport} />);
  });

  it('Intial tab index state should be 0', () => {
    const wrapper = shallow(<WDHourTab hourWeatherReport={hourWeatherReport} />);
    expect(wrapper.state('value')).toEqual(0);
  });

  describe('Handle Tab Change', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<WDHourTab hourWeatherReport={hourWeatherReport} />);
    });

    it('handle tab change through click', () => {
      wrapper.instance().handleChange('', 1);
      expect(wrapper.state('value')).toEqual(1);
    });

    it('handle tab change through swipe', () => {
      wrapper.instance().handleChangeIndex(1);
      expect(wrapper.state('value')).toEqual(1);
    });
  });
});
