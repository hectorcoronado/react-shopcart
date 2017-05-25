import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Items.css';
// destructure ADD_TO_CART bc we're not export default-ing in actions
import { addToCart } from '../../actions';

class Items extends Component {
  renderList = () => {
    // 'items' comes from reduxStore, via mSTP func we created and passed to connect func below:
    const { items, addToCartAction } = this.props;

    return items.map((item) => (
      <li
        key={item.id}
        className={'Items-list-item'}
        onClick={() => addToCartAction(item)}
      >
        <img role="presentation" src={item.link} />
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <ul className={'Items-list'}>
        {this.renderList()}
      </ul>
    );
  }
}

// redux will send whatever piece of state we need, and make it available to our component via props:
const mapStateToProps = (reduxState) => ({
  items: reduxState.items
});

// addToCartAction is a func that's invoked w/'item', which in turn invokes the dispatch func that is passed 'item'
const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
