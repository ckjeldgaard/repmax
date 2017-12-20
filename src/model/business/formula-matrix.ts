import {Formula} from '../formula/formula';
import {Constants} from '../../util/constants';

export class FormulaMatrix {

  constructor(private weight: number, private reps: number, private formulas: Formula[]) {
  }

  public build(): number[][] {
    let matrix: number[][] = [];
    for (let i: number = 0; i < Constants.DEFAULT_FORMULA_SIZE; i++) {
      matrix[i] = [];
      for (let j: number = 0; j < this.formulas.length; j++) {
        const numbers: number[] = this.formulas[j].repmax(this.weight, this.reps);
        matrix[i][j] = numbers[i];
      }
    }
    return matrix;
  }

}
