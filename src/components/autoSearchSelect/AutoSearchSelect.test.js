import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import WDAutoSearchSelect from './AutoSearchSelect';

describe('Component: WDAutoSearchSelect', () => {
  const spy = sinon.spy();

  it('Select inital state should be null', () => {
    const wrapper = shallow(<WDAutoSearchSelect callbackFromParent={spy} />);
    const dropdownState = wrapper.state('single');
    expect(dropdownState).toEqual(null);
  });

  it('Handle dropdown state change', () => {
    const wrap = shallow(<WDAutoSearchSelect callbackFromParent={spy} />);
    wrap.instance().handleChangeSingle('Pune');
    expect(wrap.state('single')).toEqual('Pune');
  });
});
