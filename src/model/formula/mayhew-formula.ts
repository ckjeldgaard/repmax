import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class MayhewFormula implements Formula {

  public name(): string {
    return 'Mayhew';
  }

  public repmax(weight: number, reps: number, size?: number): number[] {
    const oneRM = (weight * 100) / (52.2 + (41.9 * Math.exp(-1 * (reps * 0.055))));
    let rms: number[] = [Math.floor(oneRM)];
    for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
      rms.push(Math.floor((oneRM * (52.2 + (41.9 * Math.exp(-1 * (i * 0.055))))) / 100));
    }
    return rms;
  }

}