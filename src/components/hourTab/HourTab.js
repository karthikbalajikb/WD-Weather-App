import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import WDCard from '../card/Card';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 6, backgroundColor: '#dfebf3' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

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
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
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
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {this.props.hourWeatherReport.map(element => (
            <TabContainer dir={theme.direction} key={element.dt}>
              <WDCard WeatherReport={element} />
            </TabContainer>
          ))}
        </SwipeableViews>
      </div>
    );
  }
}

WDHourTab.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  hourWeatherReport: PropTypes.array.isRequired,
};

export default withStyles(styles, { withTheme: true })(WDHourTab);
