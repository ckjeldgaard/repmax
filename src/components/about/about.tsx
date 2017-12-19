import * as React from 'react';
import {ReactNode} from 'react';

export default class About extends React.Component {

  render(): ReactNode {
    return <article>
      <h1>About</h1>
      <p>This is the about page.</p>
    </article>;
  }
}