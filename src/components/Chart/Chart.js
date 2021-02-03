import React from "react";
import moment from 'moment'
import { Bar, Line, HorizontalBar } from 'react-chartjs-2';

import './Chart.scss'


const createEventsChart = (type, dataSets) => {
  let labelsData = [];
  let parsedData = {
    events: []
  };

  dataSets.forEach(el => {
    const formatDate = moment(el.date).subtract(10, 'days').calendar()
    labelsData.push(formatDate)

    parsedData.events.push(el.events)
  });

  switch (type) {
    case 'bar':
      return (
        <Bar
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.events,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    case 'line':
      return (
        <Line
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.events,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    case 'horizontalbar':
      return (
        <HorizontalBar
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.events,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    default:
      return (
        <div className="dataMissing">
          chart type is missing
        </div>
      )
  }
}

const createStatsChart = (type, dataSets) => {
  let labelsData = [];
  let parsedData = {
    impressions: [],
    clicks: [],
    revenue: []
  };

  dataSets.forEach(el => {
    const formatDate = moment(el.date).subtract(10, 'days').calendar()
    labelsData.push(formatDate)

    parsedData.impressions.push(el.impressions)
    parsedData.clicks.push(el.clicks)
    parsedData.revenue.push(el.revenue)
  });

  switch (type) {
    case 'bar':
      return (
        <Bar
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.impressions,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[1],
                data: parsedData.clicks,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[2],
                data: parsedData.revenue,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    case 'line':
      return (
        <Line
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.impressions,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[1],
                data: parsedData.clicks,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[2],
                data: parsedData.revenue,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    case 'horizontalbar':
      return (
        <HorizontalBar
          data={{
            labels: labelsData,
            datasets: [
              {
                label: Object.keys(parsedData)[0],
                data: parsedData.impressions,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[1],
                data: parsedData.clicks,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
              },
              {
                label: Object.keys(parsedData)[2],
                data: parsedData.revenue,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: {
              labels: {
                fontSize: 20
              }
            }
          }}
        />
      )
    default:
      return (
        <div className="dataMissing">
          chart type is missing
        </div>
      )
  }
}

const Chart = props => {
  return (
    <div className="chartContainer">
      {props.category === 'events' &&
        createEventsChart(props.type, props.data)
      }

      {props.category === 'stats' &&
        createStatsChart(props.type, props.data)
      }
    </div>
  )
}

export default Chart;