import {Formula} from './formula';

export class EpleyFormula implements Formula {

    private readonly DEFAULT_SIZE: number = 10;

    public repmax(weight: number, reps: number, size?: number): number[] {
        const oneRM = weight * (1 + reps / 30);
        const max = (size != null && size >= 1) ? size : this.DEFAULT_SIZE;

        let table: number[] = [Math.floor(oneRM)];
        for (let i: number = 2; i <= max; i++) {
            table.push(Math.floor(oneRM / (1 + i / 30)));
        }

        return table;
    }

}