import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Main />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
