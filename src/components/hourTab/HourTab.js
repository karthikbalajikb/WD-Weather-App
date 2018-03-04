import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import WDCard from '../card/Card';
import './HourTab.css';

class WDHourTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            {this.props.hourWeatherReport.map(element => (
              <Tab label={element.dateTime} key={element.dt} />
            ))}
          </Tabs>
        </AppBar>

        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          {this.props.hourWeatherReport.map(element => (
            <div key={element.dt} className="hourTabContainerStyle">
              <WDCard WeatherReport={element} />
            </div>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

WDHourTab.propTypes = {
  hourWeatherReport: PropTypes.array.isRequired,
};

export default WDHourTab;
