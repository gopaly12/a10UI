import React from 'react';
import { render } from 'react-dom';
import Main from '../components/Main';
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries, SplineSeries, PieSeries } from 'react-jsx-highcharts';

const root = document.getElementById('root');

render(<Main />, root);
