import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class McGlothinFormula implements Formula {

  public name(): string {
    return 'McGlothin';
  }

  public repmax(weight: number, reps: number, size?: number): number[] {
    const oneRM = (100 * weight) / (101.3 - 2.67123 * reps);
    let rms: number[] = [Math.floor(oneRM)];
    for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
      rms.push(Math.floor((oneRM * (101.3 - 2.67123 * i)) / 100));
    }
    return rms;
  }

}
