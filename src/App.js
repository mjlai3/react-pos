import React, { Component } from 'react';
import './App.css';
import Option from './components/Option.js';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = []
    this.props.cart.forEach((item, index) => {
      items.push(
        <div key={index}>{item.name}</div>
      )
    })

    return (
      <div className="overview">
        {items}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          name: 'Medium Coffee',
          price: 4.20
        }
      ],
      menu: [
        {
          name: 'Small Coffee',
          price: 3.60   
        },
        {
          name: 'Medium Coffee',
          price: 4.20   
        },
        {
          name: 'Large Coffee',
          price: 4.80   
        }
      ]
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    this.setState({
      cart: [
        ...this.state.cart,
        {
          name: item.name,
          price: item.price
        }
      ]
    })
  }

  render() {
    let options = []
    this.state.menu.forEach((item, index) => {
      options.push(
        <Option key={index} addToCart={this.addToCart} data={item} />
      )
    })

    return (
      <div className="app">
        <Overview cart={this.state.cart} />
        {options}
      </div>
    );
  }
}

export default App;
