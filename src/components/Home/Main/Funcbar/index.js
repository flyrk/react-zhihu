import React, { Component } from 'react';
import './index.css';
import help_img from './ic_help.png';
import ans_img from './ic_ans.png';
import write_img from './ic_write.png';

class Funcbar extends Component {
  render() {
    return (
      <div className="funcbar-container">
        <div className="funcbar-left">
          <button className="funcbar-link">
            <img alt="help" src={help_img} />
            <span>提问</span>
          </button>
          <button className="funcbar-link">
            <img alt="help" src={ans_img} />
            <span>回答</span>
          </button>
          <button className="funcbar-link">
            <img alt="help" src={write_img} />
            <span>写文章</span>
          </button>
        </div>

        <div className="funcbar-right">
          <span>草稿</span>
        </div>
      </div>
    );
  }
}

export default Funcbar;
