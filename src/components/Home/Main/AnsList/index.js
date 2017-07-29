import React, { Component } from 'react';
import AnsForm from './AnsForm';
import './index.css';

class AnsList extends Component {
  constructor() {
    super();
    this.state = {
      ansGroup: []
    };
  }
  render() {
    return (
      <div className="ansList-container">
        { this.state.ansGroup.map(ans => <AnsForm ans={ans} />) }
      </div>
    );
  }
}

export default AnsList;
