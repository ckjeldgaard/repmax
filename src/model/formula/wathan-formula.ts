import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class WathanFormula implements Formula {

  public name(): string {
    return 'Wathan';
  }

  public repmax(weight: number, reps: number): number[] {
    const oneRM = (weight * 100) / (48.8 + (53.8 * Math.exp(-1 * (reps * 0.075))));
    let rms: number[] = [Math.floor(oneRM)];
    for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
      rms.push(Math.floor((oneRM * (48.8 + (53.8 * Math.exp(-1 * (i * 0.075))))) / 100));
    }
    return rms;
  }
}
