import React, { Component } from 'react';
import './index.css';

class AnsForm extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      ansTime: '',
      title: '',
      content: '',
      liked: 0
    };
  }
  render() {
    return (
      <div className="ansForm-container">
        
      </div>
    );
  }
}

export default AnsForm;
