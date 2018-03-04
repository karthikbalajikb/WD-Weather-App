import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import WDHourTab from '../hourTab/HourTab';
import './TabBar.css';

class WDTabs extends React.Component {
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
            {this.props.weatherData.map(element => <Tab label={element[0]} key={element[0]} />)}
          </Tabs>
        </AppBar>

        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          {this.props.weatherData.map(element => (
            <div key={element[0]} className="tabContainerStyle">
              <WDHourTab hourWeatherReport={element[1]} />
            </div>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

WDTabs.propTypes = {
  weatherData: PropTypes.array.isRequired,
};

export default WDTabs;
