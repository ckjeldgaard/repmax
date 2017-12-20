export interface Formula {
  name(): string;

  repmax(weight: number, reps: number): number[];
}
