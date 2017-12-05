import * as React from 'react';

jest.unmock('react-dom');
const ReactDOM = require('react-dom');
ReactDOM.render = jest.fn();
const spy = jest.spyOn(document, 'getElementById');

import '../src/main';
import RepMaxApp from '../src/components/repmax-app';

describe('index', () => {

    it('should index correctly', () => {
        expect(ReactDOM.render).toHaveBeenCalledTimes(1);
        expect(ReactDOM.render).toHaveBeenCalledWith(<RepMaxApp />, null);
    });

    it('should find the correct container', () => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('app-main');
    });
});