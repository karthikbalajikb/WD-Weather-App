import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import './AppBar.css';
import WDAutoSearchSelect from '../autoSearchSelect/AutoSearchSelect';

class WDAppBar extends React.Component {
  myCallback = e => this.props.selectedCity(e);

  render() {
    return (
      <div className="appbar-root">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <i className="material-icons">cloud</i>
            </IconButton>
            <Typography variant="title" color="inherit" className="flex">
              WD Weather App
            </Typography>
            <WDAutoSearchSelect callbackFromParent={this.myCallback} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

WDAppBar.propTypes = {
  selectedCity: PropTypes.func.isRequired,
};

export default WDAppBar;
