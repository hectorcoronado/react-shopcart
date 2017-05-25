import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Items.css';

class Items extends Component {
  renderList = () => {
    // 'items' comes from reduxStore, via mSTP func we created and passed to connect func below:
    const { items } = this.props;

    return items.map((item) => (
      <li
        key={item.id}
        className={'Items-list-item'}
        onClick={() => console.log('added to store')}
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
})

export default connect(mapStateToProps)(Items);
