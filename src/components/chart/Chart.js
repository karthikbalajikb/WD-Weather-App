import React from 'react';
import PropTypes from 'prop-types';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import Card, { CardContent } from 'material-ui/Card';

const WDChart = (props) => {
  const {
    yLabel, yTempVale, xTimeCount, xTimeSeries,
  } = props;

  const areaStyle = {
    data: {
      fill: '#3f51b5',
      fillOpacity: 0.7,
      stroke: '#3f51b5',
      strokeWidth: 3,
    },
    labels: {
      fontSize: 10,
      fill: 'rgba(0, 0, 0, 0.54)',
    },
  };

  return (
    <div>
      <Card>
        <CardContent>
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis tickValues={xTimeCount} tickFormat={xTimeSeries} padding={200} />
            <VictoryAxis dependentAxis label={yLabel} />
            <VictoryArea
              style={areaStyle}
              interpolation="natural"
              height={10}
              width={600}
              data={yTempVale}
              labels={d => d.y}
            />
          </VictoryChart>
        </CardContent>
      </Card>
    </div>
  );
};

WDChart.propTypes = {
  yLabel: PropTypes.string.isRequired,
  yTempVale: PropTypes.array.isRequired,
  xTimeCount: PropTypes.array.isRequired,
  xTimeSeries: PropTypes.array.isRequired,
};

export default WDChart;
