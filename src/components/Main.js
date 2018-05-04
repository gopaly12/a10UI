import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';

import Home from './Home';
import PICharts from './PICharts';
import BarCharts from './BarCharts';
import Maps from './Maps';
import LineCharts from './LineCharts';
import SemiCharts from './SemiCharts';

class Main extends React.Component {
  render() {
    const config = {
      title: {
        text: 'Hello, World!',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      }],
    };
    return (
      <div>
        <Router>
          <main>
            <Header />
            <div className="container">

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/PICharts" component={PICharts} config={config} />
                <Route exact path="/BarCharts" component={BarCharts} />
                <Route exact path="/Maps" component={Maps} />
                <Route exact path="/SemiCharts" component={SemiCharts} />
                <Route exact path="/LineCharts" component={LineCharts} />
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    );
  }
}
export default Main;
