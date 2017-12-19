import * as React from 'react';
import {ReactNode} from 'react';
import {Route, Switch} from 'react-router';
import Home from '../home/home';
import About from '../about/about';

export default class ContentArea extends React.Component {

  render(): ReactNode {
    return <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Switch>;
  }

}