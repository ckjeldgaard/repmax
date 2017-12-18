import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class BrzyckiFormula implements Formula {

  public name(): string {
    return 'Brzycki';
  }

  public repmax(weight: number, reps: number): number[] {
    const oneRM = weight * (36 / (37 - reps));
    let rms: number[] = [Math.floor(oneRM)];
    for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
      rms.push(Math.floor((oneRM * (37 - i)) / 36));
    }
    return rms;
  }
}
