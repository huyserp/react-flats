import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 13
  };

  render(){
    return (
      <div className="map-container">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <Marker lat={this.props.coordinates[0]} lng={this.props.coordinates[1]}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
