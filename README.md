# RepMax

[![Build Status](https://travis-ci.org/ckjeldgaard/repmax.svg?branch=master)](https://travis-ci.org/ckjeldgaard/repmax)
[![codecov](https://codecov.io/gh/ckjeldgaard/repmax/branch/master/graph/badge.svg)](https://codecov.io/gh/ckjeldgaard/repmax)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/ckjeldgaard/repmax/master)](https://stryker-mutator.github.io)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/ckjeldgaard/repmax/blob/master/LICENSE.txt)

> A One-Rep Max (1RM) calculator written in [React](https://reactjs.org/).

![Screenshot](https://imgur.com/Q8BputN.png)

This is a simple progressive web app capable of calculating [one-repetition maximums](https://en.wikipedia.org/wiki/One-repetition_maximum) for weight training.
Focus has been on exploring React as well as setting up project structure with easy deployment using [Travis CI](https://travis-ci.org/) and maximizing quality by applying linting rules for Typescript and Sass, unit tests using [Jest](https://facebook.github.io/jest/) and mutation testing using [Stryker](https://stryker-mutator.github.io/).

**[See Stryker mutation report](https://ckjeldgaard.github.io/repmax/reports/mutation/html/index.html)**.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint the Typescript
npm run lint

# lint the Sass
npm run sasslint

# run the tests
npm test

# run the mutation tests
npm run stryker

# build for production with minification
npm run build

# clean the production build
npm run clean
```
