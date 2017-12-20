import {shallow, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Header from '../../../src/components/header/header';

configure({adapter: new ReactSixteenAdapter()});

describe('Header component', () => {

  it('should render correctly', () => {
    const header = shallow(<Header title='RepMax' locationPath='/'/>);
    expect(header.text()).toEqual('RepMax<Link />');
  });

  it('should render the about router link', () => {
    const header = shallow(<Header title='RepMax' locationPath='/'/>);
    expect(header.find('header Link')).toHaveLength(1);
    expect(header.find('header Link').last().prop('to')).toBe('/about');
    expect(header.find('header Link').last().prop('className')).toBe('icon about');
  });

  it('should render a backlink if the current location is a subpage', () => {
    const hello = shallow(<Header title='RepMax' locationPath='/about'/>);
    expect(hello.text()).toEqual('<Link />RepMax<Link />');
  });

  it('should render the about router link', () => {
    const header = shallow(<Header title='RepMax' locationPath='/about'/>);
    expect(header.find('header Link')).toHaveLength(2);
    expect(header.find('header Link').first().prop('to')).toBe('/');
    expect(header.find('header Link').first().prop('className')).toBe('icon back');
  });
});
