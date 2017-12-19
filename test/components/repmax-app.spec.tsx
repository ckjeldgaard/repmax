import {shallow, configure, ShallowWrapper} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import RepMaxApp from '../../src/components/repmax-app';

configure({adapter: new ReactSixteenAdapter()});

describe('RepMaxApp component', () => {

  it('should render correctly', () => {
    const appWrapper: ShallowWrapper = shallow(<RepMaxApp/>);
    expect(appWrapper.text()).toEqual('<Route /><ContentArea />');
  });

  it('should output the title', () => {
    expect(RepMaxApp.TITLE).toBe('RepMax');
  });

});