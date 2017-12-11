import * as React from 'react';
import {ChangeEvent, ReactNode} from 'react';

export interface RangeProps {
    label: string;
    abbr: string;
    min: number;
    max: number;
    step: number;
    default: number;
    inputHandler: (value: number) => any;
}

export interface RangeState {
    value: number;
}

export default class Range extends React.Component<RangeProps, RangeState> {

    constructor(props: RangeProps) {
        super(props);
        this.state = {value: this.props.default};
        this.handleChange = this.handleChange.bind(this);
    }

    private handleChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({value: Number(event.target.value)});
        this.props.inputHandler(Number(event.target.value));
    }

    render(): ReactNode {
        return <div className='range'>
            <div className='meta'>
                <label htmlFor='range'>{this.props.label}:</label>
                <p>{this.state.value}{this.props.abbr}</p>
            </div>
            <input id='range' type='range' min={this.props.min} max={this.props.max} step={this.props.step} value={this.state.value} onChange={this.handleChange} />
        </div>;
    }
}