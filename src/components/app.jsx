import React, { Component } from 'react';
import flats from '../../data/flats.js';
import FlatList from './flat-list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: []
    };
  }

  selectFlat = (id) => {
    const coordinates = [this.state.flats[id-1].lat, this.state.flats[id-1].lng]
    this.setState( {selectedFlat: coordinates } );
  }

  render() {
    return (
      <div>
        <FlatList allFlats={this.state.flats} selectFlatFunction={this.selectFlat}/>
        <Map coordinates={this.state.selectedFlat}/>
      </div>
    );
  }
}

export default App;
