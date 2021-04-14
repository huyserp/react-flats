import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  //The list patterns key shouldn't be the index of the array allFlats, but we know allFlats wont change...
  renderFlats = () => {
    return this.props.allFlats.map((flat) => {
      return <Flat key={this.props.allFlats.indexOf(flat)} imageUrl={flat.imageUrl}
            price={flat.price} currency={flat.priceCurrency} description={flat.name}/>
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
