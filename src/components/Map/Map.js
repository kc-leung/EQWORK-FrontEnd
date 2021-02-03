import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMapData } from '../../actions/mapAction';
import MapBox from '../MapBox/MapBox';
import SearchBar from '../SearchBar/SearchBar';

import './Map.scss'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapData: [],
      input: ''
    }
  }

  async componentDidMount() {
    await this.props.fetchMapData();

    this.setState({
      mapData: this.props.getMapData
    })
  }

  updateInput = (input) => {
    const filtered = this.props.getMapData.filter(data => {
      return data.name.includes(input)
    })

    this.setState({
      mapData: filtered,
      input: input
    })
  }

  render() {
    return (
      <div className="mapContainer">
        <div className="titleContainer">Map Geo Visualization</div>
        <div className="contentContainer">
          <MapBox />
          <SearchBar input={this.state.input} onChange={this.updateInput} placeholder="Attraction Name" />
          <div className="listContainer">
            <div className="itemTitle">
              <div className="name">NAME</div>
              <div className="lat">LATITUDE</div>
              <div className="lon">LONGITUDE</div>
            </div>
            {this.state.mapData.length > 0 &&
              this.state.mapData.map((data, itemIndex) => {
                return (
                  <div key={`attraction-${itemIndex}`} className={"mapDataContainer" + (this.state.input && " searching")}>
                    <div className="name">{data.name}</div>
                    <div className="lat">{data.lat}</div>
                    <div className="lon">{data.lon}</div>
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
    getMapData: state.mapReducer.getMapData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMapData: () => dispatch(fetchMapData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
