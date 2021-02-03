import React, { Component } from 'react'
import './Home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="backgroundCover"></div>
        <div className="contentContainer">
          <div className="title">EQ Works Front-End-Track Assessment</div>
          <div className="description">Built with React - Redux - ChartJS - MapBox</div>
        </div>
      </div>
    )
  }
}

export default Home;
