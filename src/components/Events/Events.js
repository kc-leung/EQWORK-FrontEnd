import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getEventsHourly, getEventsDaily } from "../../actions/eventsAction"
import SearchBar from '../SearchBar/SearchBar';
import Chart from '../Chart/Chart'
import { chartOptions } from '../../data/contants';

import './Events.scss'

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsHourlyData: [],
      eventsDailyData: [],
      input: '',
      chartType: 'bar',
    }
  }

  async componentDidMount() {
    await this.props.getEventsHourly()
    await this.props.getEventsDaily()

    this.setState({
      eventsHourlyData: this.props.getEventsHourlyData,
      eventsDailyData: this.props.getEventsDailyData
    })
  }

  updateInput = (input) => {
    const filtered = this.props.getEventsHourlyData.filter(data => {
      return data.date.includes(input)
    })

    this.setState({
      eventsHourlyData: filtered,
      input: input
    })
  }

  onClickChartOptions = (type) => {
    this.setState({
      chartType: type.toLowerCase(),
    })
  }

  render() {
    return (
      <div className="eventsContainer">
        <div className="titleContainer">Events Search List & Charts</div>

        <div className="contentContainer">
          <div className="chartOptions">
            {chartOptions.map((type, index) => {
              return (<button key={`chartOption-${index}`} className='item' onClick={() => this.onClickChartOptions(type)}>{type}</button>)
            })}
          </div>
          {this.state.eventsDailyData.length > 0 &&
            <Chart category={'events'} type={this.state.chartType} data={this.state.eventsDailyData} />
          }

          <SearchBar input={this.state.input} onChange={this.updateInput} placeholder="Date" />
          <div className="listContainer">
            <div className="itemTitle">
              <div className="date">DATE</div>
              <div className="hour">HOUR</div>
              <div className="events">EVENTS</div>
            </div>
            {this.state.eventsHourlyData.length > 0 &&
              this.state.eventsHourlyData.map((data, itemIndex) => {
                return (
                  <div key={`event-${itemIndex}`} className={"hourlyDataContainer" + (this.state.input && " searching")}>
                    <div className="date">{data.date.slice(0, data.date.indexOf('T'))}</div>
                    <div className="hour">{data.hour}</div>
                    <div className="events">{data.events}</div>
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
    getEventsDailyData: state.eventsReducer.getEventsDailyData,
    getEventsHourlyData: state.eventsReducer.getEventsHourlyData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEventsDaily: () => dispatch(getEventsDaily()),
    getEventsHourly: () => dispatch(getEventsHourly())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
