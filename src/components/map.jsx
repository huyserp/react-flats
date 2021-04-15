import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import Marker from './marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render(){
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/*<Marker />*/}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
