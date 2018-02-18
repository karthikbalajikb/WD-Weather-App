import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import WDAutoSearchSelect from "../autoSearchSelect/AutoSearchSelect";

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class WDAppBar extends React.Component {

  myCallback = e => {
    this.props.selectedCity(e)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <i className="material-icons">cloud</i>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WDAppBar);