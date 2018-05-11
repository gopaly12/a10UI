
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";

console.log('shamim')



let myChart = Highcharts.chart({
    'chart': {
        renderTo: 'main',
        type: 'pie'
    },
    'title': {
        text: 'Fruit Consumption'
    },
    "xAxis": {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    'yAxis': {
        title: {
            text: 'Fruit eaten'
        }
    },
    'series': [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
});
console.log(myChart)
export default class PICharts extends React.Component {

    render() {
        return (
            <div id="main">
                {myChart}
            </div>
        )
    }
}