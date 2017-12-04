import * as React from 'react';
import {ReactNode} from 'react';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, {}> {

    public static isOldEnough(age: number): boolean {
        return age >= 18;
    }

    public static fizzBuzz(n: number): string {
        if (n % 3 === 0) {
            return 'fizz';
        }
        if (n % 5 === 0) {
            return 'buzz';
        }
        return n.toString();
    }

    render(): ReactNode {
        return <p>Hello from {this.props.compiler} and {this.props.framework}!</p>;
    }
}