import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';

if (process.env.ENV) {
    require('./sass/main.scss');
}

ReactDOM.render(
    <Hello compiler='TypeScript' framework='React' />,
    document.getElementById('app-main')
);