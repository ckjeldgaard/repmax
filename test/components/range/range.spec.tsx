import {shallow, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Range from '../../../src/components/range/range';

configure({adapter: new ReactSixteenAdapter()});

describe('Range component', () => {

  it('should render correctly', () => {
    const range = shallow(<Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={50}
                                 inputHandler={() => {
                                 }}/>);
    expect(range.text()).toEqual('Weight:50 kg.');
  });

  it('should change value', () => {
    const range = shallow(<Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={50}
                                 inputHandler={() => {
                                 }}/>);
    range.find('input').simulate('change', {target: {value: 100}});
    expect(range.find('input').get(0).props.value).toEqual(100);
  });

  it('should contain ids and classes', () => {
    const range = shallow(<Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={50}
                                 inputHandler={() => {
                                 }}/>);
    expect(range.find('.range')).toHaveLength(1);
    expect(range.find('.meta')).toHaveLength(1);
    expect(range.find('[htmlFor="range"]')).toHaveLength(1);
    expect(range.find('#range')).toHaveLength(1);
  });

  it('should an input field of type range', () => {
    const range = shallow(<Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={50}
                                 inputHandler={() => {
                                 }}/>);
    expect(range.find('[type="range"]')).toHaveLength(1);
  });

});
