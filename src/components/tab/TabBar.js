import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import GridList, { GridListTile } from 'material-ui/GridList';

import WDHourTab from '../hourTab/HourTab';
import './TabBar.css';

import WDChart from '../chart/Chart';

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

              <div className="chart-root">
                <GridList cellHeight={180} cols={2}>
                  <GridListTile key="chart1" cols={1} className="chart-paper">
                    <WDChart
                      yLabel="Temp(celsius)"
                      xTimeCount={element[1].map((d, i) => i)}
                      xTimeSeries={element[1].map(d => d.dateTime.replace(/\s/g, ''))}
                      yTempVale={element[1].map(d => ({ y: d.temp_max }))}
                    />
                  </GridListTile>

                  <GridListTile key="chart2" cols={1} className="chart-paper">
                    <WDChart
                      yLabel="Wind(m/s)"
                      xTimeCount={element[1].map((d, i) => i)}
                      xTimeSeries={element[1].map(d => d.dateTime.replace(/\s/g, ''))}
                      yTempVale={element[1].map(d => ({ y: d.wind }))}
                    />
                  </GridListTile>
                </GridList>
              </div>

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
