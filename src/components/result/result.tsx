import * as React from 'react';
import {ReactNode} from 'react';
import {RmInput} from '../../model/rm-input';
import {FormulaMatrix} from '../../model/business/formula-matrix';
import {Avg} from '../../model/business/avg';
import {FormulaBuilder} from '../../model/business/formula-builder';

export interface ResultProps {
    input: RmInput;
    formulaBuilder: FormulaBuilder;
}

export default class Result extends React.Component<ResultProps, {}> {

    private buildMatrix(): number[][] {
        return new FormulaMatrix(
            this.props.input.weight,
            this.props.input.reps,
            this.props.formulaBuilder.getFormulas()
        ).build();
    }

    render(): ReactNode {
        const matrix: number[][] = this.buildMatrix();
        return <div className='result'>
            <table>
                <thead>
                <tr>
                    <th>RM</th>
                    <th>Average</th>
                    {
                        this.props.formulaBuilder.getFormulas().map((formula) => {
                            return <th>{formula.name()}</th>;
                        })
                    }
                </tr>
                </thead>
                <tbody>{
                    matrix.map((row, index) => {
                        const numbers = row.map((n) =>
                            <td>{n}</td>
                        );
                        const average = new Avg(row).average();
                        return <tr>
                            <td scope='row'>{index + 1}RM</td>
                            <td>{average}</td>
                            {numbers}
                        </tr>;
                    })
                }</tbody>
            </table>
        </div>;
    }
}