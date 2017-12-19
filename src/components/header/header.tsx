import * as React from 'react';
import {ReactNode} from 'react';
import {Link} from 'react-router-dom';

export interface HeaderProps {
  title: string;
  locationPath: string;
}

export default class Header extends React.Component<HeaderProps, {}> {

  render(): ReactNode {
    const back = (this.props.locationPath !== '/') ? <Link to='/' className='icon back' /> : null;
    return <header>
      {back}
      <h1>{this.props.title}</h1>
      <Link to='/about' className='icon about' />
    </header>;
  }

}