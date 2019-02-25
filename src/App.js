import React, { Component } from 'react';
import GifListContainer from './containers/GifListContainer'
import Header from './components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GifListContainer />
      </div>
    );
  }
}

export default App;
