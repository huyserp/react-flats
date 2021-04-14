import React, { Component } from 'react';
import flats from '../../data/flats.js';
import FlatList from './flat-list'

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
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
