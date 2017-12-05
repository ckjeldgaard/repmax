import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RepMaxApp from './components/repmax-app';

if (process.env.ENV) {
    require('./sass/main.scss');
}

ReactDOM.render(
    <RepMaxApp />,
    document.getElementById('app-main')
);