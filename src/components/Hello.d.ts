/// <reference types="react" />
import * as React from 'react';
import { ReactNode } from 'react';
export interface HelloProps {
    compiler: string;
    framework: string;
}
export default class Hello extends React.Component<HelloProps, {}> {
    static isOldEnough(age: number): boolean;
    static fizzBuzz(n: number): string;
    render(): ReactNode;
}
