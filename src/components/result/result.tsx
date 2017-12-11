import * as React from 'react';
import {ReactNode} from 'react';
import {RmInput} from '../../model/rm-input';
import {EpleyFormula} from '../../model/formula/epley-formula';


export interface ResultProps {
    input: RmInput;
}

export default class Result extends React.Component<ResultProps, {}> {

    render(): ReactNode {

        const numbers: number[] = new EpleyFormula().repmax(this.props.input.weight, this.props.input.reps);
        const rows = numbers.map((n, index) =>
            <tr>
                <td key={index}>{n}</td>
            </tr>
        );

        return <div>
            <p>Result. Weight: {this.props.input.weight}, Reps: {this.props.input.reps}</p>
            <table>
                <thead><tr>
                    <th>Epl</th>
                </tr></thead>
                <tbody>{rows}</tbody>
            </table>
        </div>;
    }
}