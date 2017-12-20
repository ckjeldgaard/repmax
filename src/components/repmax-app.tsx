import * as React from 'react';
import {ReactNode} from 'react';
import Header from './header/header';
import ContentArea from './content-area/content-area';
import {Route} from 'react-router';

export default class RepMaxApp extends React.Component {

  public static readonly TITLE: string = 'RepMax';

  render(): ReactNode {
    return <div>
      <Route render={(props) => {
        return (
          <Header title={RepMaxApp.TITLE} locationPath={props.location.pathname} />
        );
      }} />
      <ContentArea/>
    </div>;
  }
}
