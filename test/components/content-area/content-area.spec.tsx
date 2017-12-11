import {mount, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import ContentArea from '../../../src/components/content-area/content-area';
import Range from '../../../src/components/range/range';

configure({ adapter: new ReactSixteenAdapter() });

describe('ContentArea component', () => {

    it('should render correctly', () => {
        const wrapper = mount(<ContentArea />);
        expect(wrapper.childAt(0).props().children[0].props.label).toBe('Weight');
        expect(wrapper.childAt(0).props().children[0].props.abbr).toBe(' kg.');
        expect(wrapper.childAt(0).props().children[1].props.label).toBe('Reps');
        expect(wrapper.childAt(0).props().children[1].props.abbr).toBe('');
    });

    it('should update weight state when Range child component changes', () => {
        const wrapper = mount(<ContentArea />);
        wrapper.find(Range).first().find('input').simulate('change', { target: { value: 99 } });
        expect(wrapper.state().weight).toBe(99);
    });

    it('should update reps state when Range child component changes', () => {
        const wrapper = mount(<ContentArea />);
        wrapper.find(Range).last().find('input').simulate('change', { target: { value: 7 } });
        expect(wrapper.state().reps).toBe(7);
    });
});