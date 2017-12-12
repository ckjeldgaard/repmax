import {Formula} from './formula';

export class McGlothinFormula implements Formula {

    private readonly DEFAULT_SIZE: number = 10;

    public repmax(weight: number, reps: number, size?: number): number[] {
        const oneRM = (100 * weight) / (101.3 - 2.67123 * reps);
        const max = (size != null && size >= 1) ? size : this.DEFAULT_SIZE;

        let table: number[] = [Math.floor(oneRM)];
        for (let i: number = 2; i <= max; i++) {
            table.push(Math.floor((oneRM * (101.3 - 2.67123 * i)) / 100));
        }

        return table;
    }

}