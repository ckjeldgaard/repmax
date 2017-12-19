import {configure, shallow} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import ContentArea from '../../src/components/content-area/content-area';
import Home from '../../src/components/home/home';
import About from '../../src/components/about/about';

configure({ adapter: new ReactSixteenAdapter() });

describe('Router', () => {

  it('should render two routes', () => {
    const wrapper = shallow(<ContentArea />);
    const routes = wrapper.find('Switch Route');

    expect(routes).toHaveLength(2);

    expect(routes.at(0).prop('path')).toBe('/');
    expect(routes.at(0).prop('component')).toBe(Home);

    expect(routes.at(1).prop('path')).toBe('/about');
    expect(routes.at(1).prop('component')).toBe(About);
  });
});
