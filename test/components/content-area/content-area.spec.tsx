import {mount, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import ContentArea from '../../../src/components/content-area/content-area';

configure({ adapter: new ReactSixteenAdapter() });

describe('ContentArea component', () => {

    it('should render correctly', () => {
        const wrapper = mount(<ContentArea />);
        expect(wrapper.childAt(0).props().children[0].props.label).toBe('Weight');
        expect(wrapper.childAt(0).props().children[0].props.abbr).toBe(' kg.');
        expect(wrapper.childAt(0).props().children[1].props.label).toBe('Reps');
        expect(wrapper.childAt(0).props().children[1].props.abbr).toBe('');
    });
});