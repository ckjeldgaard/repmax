import {shallow, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Hello from '../../src/components/Hello';

configure({ adapter: new ReactSixteenAdapter() });

describe('Hello component', () => {

    it('should render correctly', () => {
        const hello = shallow(<Hello compiler='ts' framework='react' />);
        expect(hello.text()).toEqual('Hello from ts and react!');
    });

    it('should check age', () => {
        expect(Hello.isOldEnough(21)).toBeTruthy();
    });

    it('should check age at 18', () => {
        expect(Hello.isOldEnough(18)).toBeTruthy();
    });

    it('should return fizz for 3', () => {
        expect(Hello.fizzBuzz(3)).toBe('fizz');
    });

    it('should return buzz for 10', () => {
        expect(Hello.fizzBuzz(10)).toBe('buzz');
    });

    it('should return "8" for 8', () => {
        expect(Hello.fizzBuzz(8)).toBe('8');
    });
});