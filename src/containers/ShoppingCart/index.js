import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import './ShoppingCart.css';
import { removeFromCart } from '../../actions';

class ShoppingCart extends Component {
  renderShoppingCart = () => {
    const { shoppingCart, removeFromCartAction } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li
          key={uuid()}
          className={'SC-list-item'}
          onClick={() => removeFromCartAction(item.id)}
        >
          <img
            role="presentation"
            src={item.link}
            className={'SC-image'}
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

// removeFromCartAction is a func that's invoked w/'id', which in turn invokes the dispatch func that is passed 'id'
const mapDispatchToProps = (dispatch) => ({
  removeFromCartAction: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
