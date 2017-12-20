import {shallow, configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Result from '../../../src/components/result/result';
import {RmInput} from '../../../src/model/rm-input';
import {FormulaBuilder} from '../../../src/model/business/formula-builder';
import {Formula} from '../../../src/model/formula/formula';

configure({adapter: new ReactSixteenAdapter()});

let rmInput: RmInput;
let formulaBuilder: FormulaBuilder;

describe('Result component', () => {

  beforeEach(() => {
    rmInput = {
      weight: 80,
      reps: 5
    };
    let TestFormula1 = jest.fn<Formula>(() => ({
      name: jest.fn().mockReturnValue('fakeFormula1'),
      repmax: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    }));
    let TestFormula2 = jest.fn<Formula>(() => ({
      name: jest.fn().mockReturnValue('fakeFormula2'),
      repmax: jest.fn().mockReturnValue([2, 3, 4, 5, 6, 7, 8, 9, 0, 1])
    }));
    let TestFormulaBuilder = jest.fn<FormulaBuilder>(() => ({
      getFormulas: jest.fn().mockReturnValue([
        new TestFormula1(),
        new TestFormula2(),
      ])
    }));
    formulaBuilder = new TestFormulaBuilder();
  });

  it('should render table header correctly', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table thead tr th')).toHaveLength(4);
    expect(resultWrapper.find('table thead tr th').first().text()).toBe('RM');
    expect(resultWrapper.find('table thead tr th').at(1).text()).toBe('Average');
    expect(resultWrapper.find('table thead tr th').at(2).text()).toBe('fakeFormula1');
    expect(resultWrapper.find('table thead tr th').last().text()).toBe('fakeFormula2');
  });

  it('should render table body of correct size', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr')).toHaveLength(10);
  });

  it('should render formula results', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr').at(0).find('td').at(2).text()).toBe('1');
    expect(resultWrapper.find('table tbody tr').at(0).find('td').at(3).text()).toBe('2');
  });

  it('should render the average column', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr').at(3).find('td').at(1).text()).toBe('4');
  });

  it('should display XRM in first columns', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr').at(0).find('td').at(0).text()).toBe('1RM');
  });

  it('first columns scope is for entire row', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr').at(0).find('td').at(0).prop('scope')).toBe('row');
  });

  it('should hightlight the row with same rep number', () => {
    const resultWrapper = shallow(<Result input={rmInput} formulaBuilder={formulaBuilder}/>);
    expect(resultWrapper.find('table tbody tr').first().prop('className')).toBe('');
    expect(resultWrapper.find('table tbody tr').at(4).prop('className')).toBe('active');
  });
});
