import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RepMaxApp from './components/repmax-app';
import { HashRouter } from 'react-router-dom';

if (process.env.ENV) {
  require('./sass/main.scss');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

ReactDOM.render(
  <HashRouter>
    <RepMaxApp />
  </HashRouter>,
  document.getElementById('app-main')
);
