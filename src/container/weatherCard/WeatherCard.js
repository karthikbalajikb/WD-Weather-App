import React from "react";
import PropTypes from 'prop-types';
import WDTabs from "../../components/tab/TabBar";
import getWeatherDetails from "./WeatherCard.service";
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
   paper : {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '50px'
   }
})

class WeatherCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { report: [] }
    }

    componentDidMount() {
        try {
            if (this.props.selectedCity.length !== 0) {
                getWeatherDetails(this.props.selectedCity).then((resposne) => {
                    this.setState({ report: resposne })
                })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else {
                this.setState({ report: [] })
            }
        } catch (e) {
            this.setState({ report: [] })
        }
    }

    componentWillReceiveProps(props) {
        try {
            if (this.props.selectedCity.length !== 0) {
                getWeatherDetails(props.selectedCity).then((resposne) => {
                    this.setState({ report: resposne })
                })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else {
                this.setState({ report: [] })
            }
        } catch (e) {
            this.setState({ report: [] })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.report.length > 0 ? (
                    <WDTabs weatherData={this.state.report} />
                ) : <Typography variant="headline" className={classes.paper} color="textSecondary">
                        <span> Loading ... </span>
                    </Typography>}
            </div>
        )
    }
}

WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(WeatherCard);