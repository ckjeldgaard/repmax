import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RepMaxApp from './components/repmax-app';

if (process.env.ENV) {
  require('./sass/main.scss');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

ReactDOM.render(
  <RepMaxApp/>,
  document.getElementById('app-main')
);