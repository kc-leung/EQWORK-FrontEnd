import React, { useState, useRef } from "react";
import { connect } from 'react-redux'
import ReactMapGL, { Marker, FlyToInterpolator, Popup } from "react-map-gl";
import useSupercluster from "use-supercluster";

import Pin from '../../assets/pin.svg'

import "./MapBox.scss";

const MapBox = props => {
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    width: "80vw",
    height: "60vh",
    zoom: 6
  });

  const [selectedMark, setSelectedMark] = useState(null)

  const mapRef = useRef();
  const mapData = props.getMapData.length > 0 ? props.getMapData : [];
  const points = mapData.map(data => ({
    type: "Feature",
    properties: { cluster: false, poiId: data.poi_id, name: data.name },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(data.lon),
        parseFloat(data.lat)
      ]
    }
  }))

  const bounds = mapRef.current ? mapRef.current.getMap()
    .getBounds()
    .toArray()
    .flat() : null

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  return (
    <div className="mapBoxContainer">
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id), 20
                    );

                    setViewport({
                      ...viewport,
                      latitude,
                      longitude,
                      zoom: expansionZoom,
                      transitionInterpolator: new FlyToInterpolator({
                        speed: 2
                      }),
                      transitionDuration: "auto"
                    });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`poi-${cluster.properties.poiId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="attraction-marker" onClick={(e) => { e.preventDefault(); setSelectedMark(cluster); }}>
                <img src={Pin} alt="attraction" />
              </button>
            </Marker>
          );
        })}

        {selectedMark ? (
          <Popup
            latitude={selectedMark.geometry.coordinates[1]}
            longitude={selectedMark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedMark(null);
            }}
          >
            <div className="contentContainer">
              <h3 className="name">{selectedMark.properties.name}</h3>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    getMapData: state.mapReducer.getMapData
  }
}

export default connect(mapStateToProps)(MapBox)
