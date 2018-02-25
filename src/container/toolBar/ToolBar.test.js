import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ToolBar from './ToolBar';

describe('Container : Toolbar', () => {
  let mock;

  beforeEach(() => {
    mock = jest.fn();
  });

  it('ToolBar snapshot test', () => {
    const component = renderer.create(<ToolBar selectedCity={mock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Get selected city props from WDAppBar callabck', () => {
    const wrapper = shallow(<ToolBar selectedCity={mock} />);
    wrapper.instance().callBack('Bangalore');
    expect(mock).toHaveBeenCalledWith('Bangalore');
  });
});
