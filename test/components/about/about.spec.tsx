import {shallow, configure, ShallowWrapper} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import About from '../../../src/components/about/about';

configure({adapter: new ReactSixteenAdapter()});

/**
 * Ridiculous tests. Exclusively made to avoid test mutations.
 */
describe('About component', () => {

  it('should render the formula links on the About page', () => {
    const wrapper: ShallowWrapper = shallow(<About />);
    expect(wrapper.find('article ul li a').at(0).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#Lombardi');
    expect(wrapper.find('article ul li a').at(1).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#Epley');
    expect(wrapper.find('article ul li a').at(2).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#McGlothin');
    expect(wrapper.find('article ul li a').at(3).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki');
    expect(wrapper.find('article ul li a').at(4).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#Mayhew');
    expect(wrapper.find('article ul li a').at(5).prop('href'))
      .toBe('https://en.wikipedia.org/wiki/One-repetition_maximum#Wathan');
  });

  it('should render the technical links on the About page', () => {
    const wrapper: ShallowWrapper = shallow(<About />);

    expect(wrapper.find('article p a').first().prop('href')).toBe('https://reactjs.org/');
    expect(wrapper.find('article p a').first().prop('target')).toBe('_blank');

    expect(wrapper.find('article p a').last().prop('href')).toBe('https://github.com/ckjeldgaard/repmax');
    expect(wrapper.find('article p a').last().prop('target')).toBe('_blank');
  });

});