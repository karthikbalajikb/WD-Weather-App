import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    font:{
        fontSize: '700%'
    }
});

class WDCard extends React.Component {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes  } = this.props;

        return (
            <div>
                <Card className={classes.card}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography variant="display4" className={classes.font}>
                            {this.props.WeatherReport.temp_max}
                            <span>°C</span>
                            </Typography>
                            <Typography variant="headline" color="textSecondary">
                           <span> {this.props.WeatherReport.description} </span>
                             </Typography>
                             <Typography variant="subheading" color="textSecondary">
                           <span>Humidity : {this.props.WeatherReport.humidity}%</span>
                             </Typography>
                             <Typography variant="subheading" color="textSecondary">
                           <span>Wind {this.props.WeatherReport.wind} m/s </span>
                             </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            
                        </div>
                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={this.props.WeatherReport.icon}
                    />
                </Card>
            </div>
        );
    }
}

WDCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WDCard);