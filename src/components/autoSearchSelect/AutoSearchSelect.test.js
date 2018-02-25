import React from 'react';
import { shallow } from 'enzyme';
import { createShallow } from 'material-ui/test-utils';
import sinon from 'sinon';
import WDAutoSearchSelect from './AutoSearchSelect';

describe('Component: WDAutoSearchSelect', () => {
  const spy = sinon.spy();

  it('Select inital state should be null', () => {
    const shallowWrap = shallow(<WDAutoSearchSelect callbackFromParent={spy} />);
    const dropdownState = shallowWrap.dive().state('single');
    expect(dropdownState).toEqual(null);
  });

  it('Handle dropdown state change', () => {
    const shallowMUI = createShallow({ dive: true });
    const wrap = shallowMUI(<WDAutoSearchSelect callbackFromParent={spy} />);
    wrap.instance().handleChangeSingle('Pune');
    expect(wrap.state('single')).toEqual('Pune');
  });
});
