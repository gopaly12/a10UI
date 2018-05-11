import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './Header';

import Home from './Home'
import PICharts from './PICharts'
import BarCharts from './BarCharts'
import Maps from './Maps'
import LineCharts from './LineCharts'
import SemiCharts from './SemiCharts'
class Main extends React.Component {
  render() {

    return (
      <div>
        <Router>
          <main>
            <Header />
            <div className="container">

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/PICharts' component={PICharts} />
                <Route exact path='/BarCharts' component={BarCharts} />
                <Route exact path='/Maps' component={Maps} />
                <Route exact path='/SemiCharts' component={SemiCharts} />
                <Route exact path='/LineCharts' component={LineCharts} />
              </Switch>
            </div>
          </main>
        </Router>
      </div>
    )
  }
}
export default Main;
