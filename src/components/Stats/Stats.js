import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getStatsHourly, getStatsDaily } from "../../actions/statsAction"
import SearchBar from '../SearchBar/SearchBar';
import Chart from '../Chart/Chart'
import { chartOptions } from '../../data/contants';

import './Stats.scss'

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statsHourlyData: [],
      statsDailyData: [],
      input: '',
      chartType: 'bar',
      chartCategory: 'impressions'
    }
  }

  async componentDidMount() {
    await this.props.getStatsHourly()
    await this.props.getStatsDaily()

    this.setState({
      statsHourlyData: this.props.getStatsHourlyData,
      statsDailyData: this.props.getStatsDailyData
    })
  }

  updateInput = (input) => {
    const filtered = this.props.getStatsHourlyData.filter(data => {
      return data.date.includes(input)
    })

    this.setState({
      statsHourlyData: filtered,
      input: input
    })
  }

  onClickChartType = (type) => {
    this.setState({
      chartType: type.toLowerCase(),
    })
  }

  render() {
    return (
      <div className="statsContainer">
        <div className="titleContainer">Stats Search List & Charts</div>

        <div className="contentContainer">
          <div className="chartOptions">
            {chartOptions.map((type, index) => {
              return (<button key={`chartOption-${index}`} className='item' onClick={() => this.onClickChartType(type)}>{type}</button>)
            })}
          </div>
          <div className="categoryOptions">Click on one of the category in the chart to select or unselect it's view</div>
          {this.state.statsDailyData.length > 0 &&
            <Chart category={'stats'} type={this.state.chartType} data={this.state.statsDailyData} />
          }

          <SearchBar input={this.state.input} onChange={this.updateInput} placeholder="Date" />
          <div className="listContainer">
            <div className="itemTitle">
              <div className="date">DATE</div>
              <div className="hour">HOUR</div>
              <div className="impressions">IMPRESSIOS</div>
              <div className="clicks">CLICKS</div>
              <div className="revenue">REVENUE</div>
            </div>
            {this.state.statsHourlyData.length > 0 &&
              this.state.statsHourlyData.map((data, itemIndex) => {
                return (
                  <div key={`stat-${itemIndex}`} className={"hourlyDataContainer" + (this.state.input && " searching")}>
                    <div className="date">{data.date.slice(0, data.date.indexOf('T'))}</div>
                    <div className="hour">{data.hour}</div>
                    <div className="impressions">{data.impressions}</div>
                    <div className="clicks">{data.clicks}</div>
                    <div className="revenue">{data.revenue}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    getStatsDailyData: state.statsReducer.getStatsDailyData,
    getStatsHourlyData: state.statsReducer.getStatsHourlyData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStatsDaily: () => dispatch(getStatsDaily()),
    getStatsHourly: () => dispatch(getStatsHourly())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
