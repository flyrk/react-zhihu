import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Home} />
    </App>
  </Router>, document.getElementById('root'));
registerServiceWorker();
