import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './Card.css';

const WDCard = (props) => {
  const { WeatherReport } = props;

  return (
    <div>
      <Card className="card">
        <div className="details">
          <CardContent className="content">
            <Typography variant="display4" className="font">
              {WeatherReport.temp_max}
              <span>°C</span>
            </Typography>
            <Typography variant="headline" color="textSecondary">
              {WeatherReport.description}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              Humidity : {WeatherReport.humidity}%
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              Wind {WeatherReport.wind} m/s
            </Typography>
          </CardContent>
        </div>
        <CardMedia className="cover" image={WeatherReport.icon} />
      </Card>
    </div>
  );
};

WDCard.propTypes = {
  WeatherReport: PropTypes.object.isRequired,
};

export default WDCard;
