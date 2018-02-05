import React, { Component } from 'react';

class Option extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(e) {
    this.props.addToCart(this.props.data)
  }

  render() {
    return (
      <div className="option" onClick={this.addToCart}>
        <span>{this.props.data.name}</span>
      </div>
    );
  }
}

export default Option