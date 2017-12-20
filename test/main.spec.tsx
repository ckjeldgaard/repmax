import * as React from 'react';

jest.unmock('react-dom');
const ReactDOM = require('react-dom');
ReactDOM.render = jest.fn();
const spy = jest.spyOn(document, 'getElementById');

Object.defineProperty(window.navigator, 'serviceWorker', {
  value: {
    register: jest.fn()
  }, writable: true
});

import '../src/main';
import RepMaxApp from '../src/components/repmax-app';
import {HashRouter} from 'react-router-dom';

describe('index', () => {

  it('should index correctly', () => {
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
    expect(ReactDOM.render).toHaveBeenCalledWith(<HashRouter><RepMaxApp /></HashRouter>, null);
  });

  it('should find the correct container', () => {
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('app-main');
  });

  it('should register a service worker', () => {
    const navigatorSpy = jest.spyOn(window.navigator.serviceWorker, 'register');
    expect(navigatorSpy).toHaveBeenCalled();
    expect(navigatorSpy).toHaveBeenCalledWith('service-worker.js');
  });

});
