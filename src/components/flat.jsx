import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlatFunction(this.props.id);
  }

  render() {
    const backgroundImg = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imageUrl}')`}
    return (
      <div className="card" style={backgroundImg}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
