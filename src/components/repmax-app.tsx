import * as React from 'react';
import {ReactNode} from 'react';
import Header from './header/header';
import ContentArea from './content-area/content-area';

export default class RepMaxApp extends React.Component {

  private readonly TITLE: string = 'RepMax';

  render(): ReactNode {
    return <div>
      <Header title={this.TITLE}/>
      <ContentArea/>
    </div>;
  }
}