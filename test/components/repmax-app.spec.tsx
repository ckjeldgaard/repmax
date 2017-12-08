import {shallow, configure, ShallowWrapper} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import RepMaxApp from '../../src/components/repmax-app';

configure({ adapter: new ReactSixteenAdapter() });

describe('RepMaxApp component', () => {

    it('should render correctly', () => {
        const hello: ShallowWrapper = shallow(<RepMaxApp />);
        expect(hello.text()).toEqual('<Header /><ContentArea />');
    });

    it('should output the title', () => {
        const hello: ShallowWrapper = shallow(<RepMaxApp />);
        expect(hello.render().text()).toEqual('RepMaxThis is the content');
    });
});