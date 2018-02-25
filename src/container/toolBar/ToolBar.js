import React from 'react';
import PropTypes from 'prop-types';
import WDAppBar from '../../components/appBar/AppBar';

class ToolBar extends React.Component {
  callBack = city => this.props.selectedCity(city);

  render() {
    return <WDAppBar selectedCity={this.callBack} />;
  }
}

ToolBar.propTypes = {
  selectedCity: PropTypes.func.isRequired,
};

export default ToolBar;
