import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Option from './option';

describe('Component : Option', () => {
  const onFocus = sinon.spy();
  const onSelect = jest.fn();

  const props = {
    children: 'ss',
    isFocused: true,
    isSelected: false,
    onFocus,
    onSelect,
    option: {},
  };

  it('Renders without crashing', () => {
    shallow(<Option {...props} />);
  });

  it('Option clicked', () => {
    const wrapper = shallow(<Option {...props} />);
    const MenuItem = wrapper.dive().find('MenuItem');
    MenuItem.simulate('click');
    expect(onSelect).toBeCalled();
  });
});
