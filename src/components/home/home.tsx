import * as React from 'react';
import {ReactNode} from 'react';
import Range from '../range/range';
import Result from '../result/result';
import {RmInput} from '../../model/rm-input';
import {FormulaBuilder} from '../../model/business/formula-builder';
import {RepmaxFormulaBuilder} from '../../model/business/repmax-formula-builder';

export default class Home extends React.Component<{}, RmInput> {

  private readonly DEFAULT_WEIGHT: number = 50;
  private readonly DEFAULT_REPS: number = 1;

  constructor(props: Object) {
    super(props);
    this.state = {
      weight: this.DEFAULT_WEIGHT,
      reps: this.DEFAULT_REPS
    };
    this.changeWeight = this.changeWeight.bind(this);
    this.changeReps = this.changeReps.bind(this);
  }

  private changeWeight(w: number): void {
    this.setState({weight: w});
  }

  private changeReps(r: number): void {
    this.setState({reps: r});
  }

  private formulaBuilder(): FormulaBuilder {
    return new RepmaxFormulaBuilder();
  }

  render(): ReactNode {
    return <article>
      <Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={this.DEFAULT_WEIGHT}
             inputHandler={this.changeWeight}/>
      <Range label='Reps' abbr='' min={1} max={10} step={1} default={this.DEFAULT_REPS} inputHandler={this.changeReps}/>
      <Result input={this.state} formulaBuilder={this.formulaBuilder()}/>
    </article>;
  }
}