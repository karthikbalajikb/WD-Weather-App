import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import ToolBar from './container/toolBar/ToolBar';
import WeatherCard from './container/weatherCard/WeatherCard';

const styles = {
  paper: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '50px',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: null };
    this.selectedCity = this.selectedCity.bind(this);
  }

  selectedCity(city) {
    this.setState({ city });
  }

  render() {
    const { classes } = this.props;
    const { city } = this.state;
    return (
      <div>
        <ToolBar selectedCity={this.selectedCity} />
        {this.state.city === null ? (
          <Typography variant="headline" className={classes.paper} color="textSecondary">
            <span> Select a city from dropdown </span>
          </Typography>
        ) : (
          <WeatherCard selectedCity={city} />
        )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
