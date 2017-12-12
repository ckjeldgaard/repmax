export class Avg {

    constructor(private numbers: number[]) {
    }

    public average(): number {
        let total: number = 0;
        for (const n of this.numbers) {
            total += n;
        }
        return Math.floor(total / this.numbers.length);
    }
}