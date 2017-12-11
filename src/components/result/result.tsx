import * as React from 'react';
import {ReactNode} from 'react';
import {RmInput} from '../../model/rm-input';


export interface ResultProps {
    input: RmInput;
}

export default class Result extends React.Component<ResultProps, {}> {

    render(): ReactNode {
        return <p>Result. Weight: {this.props.input.weight}, Reps: {this.props.input.reps}</p>;
    }
}