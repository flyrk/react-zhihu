import React, { Component } from 'react';
import Funcbar from './Funcbar';
import AnsList from './AnsList';
import './index.css';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Funcbar />
        <AnsList />
      </div>
    );
  }
}

export default Main;
