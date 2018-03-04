import React from 'react';
import Typography from 'material-ui/Typography';

import ToolBar from './container/toolBar/ToolBar';
import WeatherCard from './container/weatherCard/WeatherCard';
import './App.css';

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
    const { city } = this.state;
    return (
      <div>
        <ToolBar selectedCity={this.selectedCity} />
        {this.state.city === null ? (
          <Typography variant="headline" className="paper" color="textSecondary">
            <span> Select a city from dropdown </span>
          </Typography>
        ) : (
          <WeatherCard selectedCity={city} />
        )}
      </div>
    );
  }
}

export default App;
