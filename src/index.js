import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

$(function () {
  $('[data-toggle="popover"]').popover();
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
