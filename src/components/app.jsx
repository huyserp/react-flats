import React, { Component } from 'react';
import flats from '../../data/flats.js';
import FlatList from './flat-list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: ""
    };
  }

  selectFlat() {

  }

  render() {
    return (
      <div>
        <FlatList allFlats={this.state.flats}/>
        <Map />
      </div>
    );
  }
}

export default App;
