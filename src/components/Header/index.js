import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from './favicon-bg.png';
import alertRing from './remind_fill.png';
import prMessage from './mail_fill.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          <Link to="/"><img alt="logo" src={logo} className="header-logo"/></Link>
          <nav className="header-nav">
            <Link to="/"><span className="header-nav-link">首页</span></Link>
            <Link to="/"><span className="header-nav-link">发现</span></Link>
            <Link to="/"><span className="header-nav-link">话题</span></Link>
          </nav>
          <div className="header-searchbar">
            <div className="searchbar-input-wrapper">
              <input type="text" placeholder="搜索您感兴趣的内容..." className="searchbar-input"/>
              <div className="searchbar-input-icon"></div>
            </div>
            <button className="searchbar-btn">提问</button>
          </div>
          <div className="header-info">
            <img src={alertRing} alt="remind_fill" />
            <img src={prMessage} alt="message" />
            <button className="searchbar-btn">登录</button>
          </div>

        </div>

      </header>
    );
  }
}

export default Header;
