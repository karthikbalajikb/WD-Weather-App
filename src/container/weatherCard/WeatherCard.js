import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import WDTabs from '../../components/tab/TabBar';
import getWeatherDetails from './WeatherCard.service';

import './WeatherCard.css';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { report: [] };
  }

  componentDidMount() {
    try {
      if (this.props.selectedCity.length !== 0) {
        getWeatherDetails(this.props.selectedCity)
          .then((resposne) => {
            this.setState({ report: resposne });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.setState({ report: [] });
      }
    } catch (e) {
      this.setState({ report: [] });
    }
  }

  componentWillReceiveProps(props) {
    try {
      if (this.props.selectedCity.length !== 0) {
        getWeatherDetails(props.selectedCity)
          .then((resposne) => {
            this.setState({ report: resposne });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.setState({ report: [] });
      }
    } catch (e) {
      this.setState({ report: [] });
    }
  }

  render() {
    return (
      <div>
        {this.state.report.length > 0 ? (
          <WDTabs weatherData={this.state.report} />
        ) : (
          <Typography variant="headline" color="textSecondary" className="paper">
            <span> Loading ... </span>
          </Typography>
        )}
      </div>
    );
  }
}

WeatherCard.propTypes = {
  selectedCity: PropTypes.string.isRequired,
};

export default WeatherCard;
