import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import WDCard from './Card';

describe('Component: WDCard', () => {
  const WeatherReport = {
    temp_max: 23,
    description: 'test',
    humidity: 100,
    wind: 20,
    icon: 'http://openweathermap.org/img/w/01n.png',
  };

  it('Renders without crashing', () => {
    shallow(<WDCard WeatherReport={WeatherReport} />);
  });

  it('Snapshot testing', () => {
    const tree = renderer.create(<WDCard WeatherReport={WeatherReport} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
