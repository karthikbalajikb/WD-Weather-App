import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui/Menu';

class Option extends React.Component {
  handleClick = event => this.props.onSelect(this.props.option, event);

  render() {
    const { children, isFocused } = this.props;

    return (
      <MenuItem selected={isFocused} onClick={this.handleClick}>
        {children}
      </MenuItem>
    );
  }
}

Option.propTypes = {
  children: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
};

export default Option;
