import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class LombardiFormula implements Formula {
  name(): string {
    return 'Lombardi';
  }

  repmax(weight: number, reps: number): number[] {
    const oneRM = weight * Math.pow(reps, 1 / 10);
    let rms: number[] = [Math.floor(oneRM)];
    for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
      rms.push(Math.floor(oneRM / (Math.pow(i, 1 / 10))));
    }
    return rms;
  }
}
