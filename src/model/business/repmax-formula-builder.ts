import {FormulaBuilder} from './formula-builder';
import {Formula} from '../formula/formula';
import {McGlothinFormula} from '../formula/mcglothin-formula';
import {EpleyFormula} from '../formula/epley-formula';
import {LombardiFormula} from '../formula/lombardi-formula';
import {BrzyckiFormula} from '../formula/brzycki-formula';
import {MayhewFormula} from '../formula/mayhew-formula';
import {WathanFormula} from '../formula/wathan-formula';

export class RepmaxFormulaBuilder implements FormulaBuilder {

  getFormulas(): Formula[] {
    let formulas: Formula[] = [];
    formulas.push(new LombardiFormula());
    formulas.push(new EpleyFormula());
    formulas.push(new McGlothinFormula());
    formulas.push(new BrzyckiFormula());
    formulas.push(new MayhewFormula());
    formulas.push(new WathanFormula());
    return formulas;
  }
}
