import React, { Component } from 'react';
import Typebar from './Typebar';
import Navbar from './Navbar';
import './index.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <Typebar />
        <Navbar />
      </div>
    );
  }
}

export default Sidebar;
