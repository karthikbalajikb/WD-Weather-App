import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import WeatherCard from './WeatherCard';
import WDTabs from '../../components/tab/TabBar';

describe('Container: WeatherCard', () => {
  const city = 'Chennai';

  const weatherReport = [
    [
      '31th Jan 2018',
      [
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
      ],
    ],
    [
      '30th Jan 2018',
      [
        {
          dateTime: '2123243458',
          dt: '09 Feb 2018',
          temp_max: 23,
          description: 'test',
          humidity: 100,
          wind: 20,
          icon: 'ss',
        },
        {
          dateTime: '2123243469',
          dt: '10 Feb 2018',
          temp_max: 43,
          description: 'test 222',
          humidity: 90,
          wind: 30,
          icon: 'dd',
        },
      ],
    ],
  ];

  it('Renders without crashing', () => {
    shallow(<WeatherCard selectedCity={city} />);
  });

  it('WeatherCard snapshot test', () => {
    const component = renderer.create(<WeatherCard selectedCity={city} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('report inital state should be empty array', () => {
    const shallowWrap = shallow(<WeatherCard selectedCity={city} />);
    const dropdownState = shallowWrap.state('report');
    expect(dropdownState).toEqual([]);
  });

  describe('Loading state changes', () => {
    it('Loading should be seen when report state is empty', () => {
      const wrap = shallow(<WeatherCard selectedCity={city} />);
      const reportState = wrap.state('report');
      const mountWrap = mount(<WeatherCard selectedCity={city} />);
      const Typography = mountWrap.find('Typography');

      expect(reportState.length).toEqual(0);
      expect(Typography.length).toEqual(1);
      expect(Typography.text()).toEqual(' Loading ... ');
    });

    it('Loading should be removed and WDTabs component must be rendered when report state is not empty', () => {
      const wrap = shallow(<WeatherCard selectedCity={city} />);
      wrap.setState({ report: weatherReport });
      const reportState = wrap.state('report');
      const WDTabsComp = wrap.find(WDTabs);

      expect(reportState.length).toEqual(2);
      expect(WDTabsComp.length).toEqual(1);
    });
  });

  it('Test componentWillReceiveProps() by passing new city', () => {
    const newCity = 'Bangalore';
    const wrap = mount(<WeatherCard selectedCity={city} />);
    wrap.setProps({ selectedCity: newCity });
    const selectedCity = wrap.prop('selectedCity');
    expect(selectedCity).toEqual(newCity);
  });
});
