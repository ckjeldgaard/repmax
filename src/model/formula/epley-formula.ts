import {Formula} from './formula';
import {Constants} from '../../util/constants';

export class EpleyFormula implements Formula {

    public name(): string {
        return 'Epley';
    }

    public repmax(weight: number, reps: number, ): number[] {
        const oneRM = weight * (1 + reps / 30);
        let rms: number[] = [Math.floor(oneRM)];
        for (let i: number = 2; i <= Constants.DEFAULT_FORMULA_SIZE; i++) {
            rms.push(Math.floor(oneRM / (1 + i / 30)));
        }
        return rms;
    }

}