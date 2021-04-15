import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  //The list patterns key shouldn't be the index of the array allFlats, but we know allFlats wont change...
  renderFlats = () => {
    let id = 0;
    return this.props.allFlats.map((flat) => {
      return <Flat id={flat.id} key={flat.id} imageUrl={flat.imageUrl}
            price={flat.price} currency={flat.priceCurrency} description={flat.name} selectFlatFunction={this.props.selectFlatFunction}/>
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
