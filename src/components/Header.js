import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
      const listStyle = {
          display: 'inline',
          width:'200',
          background:'red',
          border: '5px solid pink'
        };
      return (
        <div>
          <div className="body">
              <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                      <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span> 
                      </button>
                      <a className="navbar-brand" >
                        <img src="https://www.highcharts.com/media/templates/highsoft_2015/images/logo.svg" width="" height="40" alt="Logo" />
                      </a>
                  </div>
                  <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav  mr-auto">
                          <li className="nav-item  listStyle active"><Link to ='/'>Home</Link></li>
                          <li className="nav-item  listStyle"><Link to = 'PICharts'>PICharts</Link></li>
                          <li className="nav-item  listStyle"><Link to = '/BarCharts'>BarCharts</Link></li>
                          <li className="nav-item  listStyle"><Link to = '/Maps'>Maps</Link></li>
                          <li className="nav-item  listStyle"><Link to = '/LineCharts'>LineCharts</Link></li>
                          <li className="nav-item  listStyle"><Link to = '/SemiCharts'>SemiCharts</Link></li>
                      </ul> 
                      </div>
                  </div>
              </nav> 
          </div>
        </div>
      )
    }
  }
export default Header;  
