import React, { Component } from 'react';

import './App.css';
import Items from '../containers/Items';

class App extends Component {
  render() {
    return (
      <div className="App-main-body">
        <Items />
      </div>
    );
  }
}

export default App;
