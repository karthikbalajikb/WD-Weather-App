import React from 'react';
import { shallow } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import WDTabs from './TabBar';

describe('Component : WDTabs', () => {
  const weatherData = [
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

  it('renders without crashing', () => {
    shallow(<WDTabs weatherData={weatherData} />);
  });

  it('intial state should be 0', () => {
    const wrapper = shallow(<WDTabs weatherData={weatherData} />);
    expect(wrapper.dive().state('value')).toEqual(0);
  });

  describe('Handle tab change', () => {
    let wrapper;
    beforeEach(() => {
      const shallowMUI = createShallow({ dive: true });
      wrapper = shallowMUI(<WDTabs weatherData={weatherData} />);
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
