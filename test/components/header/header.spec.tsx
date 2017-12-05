import {shallow, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Header from '../../../src/components/header/header';

configure({ adapter: new ReactSixteenAdapter() });

describe('Header component', () => {

    it('should render correctly', () => {
        const hello = shallow(<Header title='RepMax' />);
        expect(hello.text()).toEqual('RepMax');
    });
});