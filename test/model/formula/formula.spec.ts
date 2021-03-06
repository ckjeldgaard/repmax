import {EpleyFormula} from '../../../src/model/formula/epley-formula';
import {McGlothinFormula} from '../../../src/model/formula/mcglothin-formula';
import {LombardiFormula} from '../../../src/model/formula/lombardi-formula';
import {BrzyckiFormula} from '../../../src/model/formula/brzycki-formula';
import {MayhewFormula} from '../../../src/model/formula/mayhew-formula';
import {WathanFormula} from '../../../src/model/formula/wathan-formula';

describe('Formula', () => {

  it('Epley formula', () => {
    expect(new EpleyFormula().name()).toEqual('Epley');
    expect(new EpleyFormula().repmax(80, 5)).toEqual([93, 87, 84, 82, 80, 77, 75, 73, 71, 70]);
  });

  it('should provide a list of 10 items if no size is specified.', () => {
    expect(new EpleyFormula().repmax(80, 5)).toHaveLength(10);
  });

  it('McGlothin formula', () => {
    expect(new McGlothinFormula().name()).toEqual('McGlothin');
    expect(new McGlothinFormula().repmax(80, 5)).toEqual([90, 87, 84, 82, 80, 77, 75, 72, 70, 67]);
  });

  it('Lombardi formula', () => {
    expect(new LombardiFormula().name()).toEqual('Lombardi');
    expect(new LombardiFormula().repmax(80, 5)).toEqual([93, 87, 84, 81, 80, 78, 77, 76, 75, 74]);
  });

  it('Brzycki formula', () => {
    expect(new BrzyckiFormula().name()).toEqual('Brzycki');
    expect(new BrzyckiFormula().repmax(80, 5)).toEqual([90, 87, 85, 82, 80, 77, 75, 72, 70, 67]);
  });

  it('Mayhew formula', () => {
    expect(new MayhewFormula().name()).toEqual('Mayhew');
    expect(new MayhewFormula().repmax(80, 5)).toEqual([95, 85, 83, 81, 80, 78, 76, 75, 74, 72]);
  });

  it('Wathan formula', () => {
    expect(new WathanFormula().name()).toEqual('Wathan');
    expect(new WathanFormula().repmax(80, 5)).toEqual([93, 88, 85, 82, 80, 77, 75, 73, 71, 69]);
  });

});
