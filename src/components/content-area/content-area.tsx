import * as React from 'react';
import {ReactNode} from 'react';
import Range from '../range/range';

export default class ContentArea extends React.Component {
    render(): ReactNode {
        return <article>
            <Range label='Weight' abbr=' kg.' min={0} max={200} step={5} default={50} />
            <Range label='Reps' abbr='' min={1} max={10} step={1} default={1} />
        </article>;
    }
}