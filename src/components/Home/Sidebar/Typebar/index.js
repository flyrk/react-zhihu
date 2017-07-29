import React, { Component } from 'react';
import './index.css';
import live_img from './ic_live.png';
import book_img from './ic_book.png';
import circleTable_img from './ic_circletable.png';
import specialArticle_img from './ic_article.png';
import payQ_img from './ic_payquest.png';

class Typebar extends Component {
  render() {
    return (
      <div className="typebar-container">
        <ul className="typebar-categoryList">
          <li className="typebar-categoryItem typebar-liveItem">
            <img alt="Live" src={live_img} />
            <span>Live</span>
          </li>
          <li className="typebar-categoryItem typebar-bookItem">
            <img alt="bookstore" src={book_img} />
            <span>书店</span>
          </li>
          <li className="typebar-categoryItem typebar-tableItem">
            <img alt="circleTable" src={circleTable_img} />
            <span>圆桌</span>
          </li>
          <li className="typebar-categoryItem typebar-articleItem">
            <img alt="specialArticle" src={specialArticle_img} />
            <span>专栏</span>
          </li>
          <li className="typebar-categoryItem typebar-payItem">
            <img alt="payQuest" src={payQ_img} />
            <span>付费咨询</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Typebar;
