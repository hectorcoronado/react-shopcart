import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ShoppingCart.css';

class ShoppingCart extends Component {
  renderShoppingCart = () => {
    const { shoppingCart } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li
          key={item.id}
          className={'SC-list-item'}
          onClick={() => console.log('remove from cart')}
        >
          <img
            role="presentation"
            src={item.link}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'SC-list'}>
        {this.renderShoppingCart()}
      </ul>
    );
  }
}

// const mapStateToProps = (reduxState) => ({
//   shoppingCart: reduxState.shoppingCart
// });

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

export default connect(mapStateToProps)(ShoppingCart);
