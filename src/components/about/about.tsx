import * as React from 'react';
import {ReactNode} from 'react';

export default class About extends React.Component {

  render(): ReactNode {
    return <article>
      <h1>About</h1>
      <p>This app is a calculator developed as a progressive web app for estimating One-repetition maximums for weight training. One rep maximum (or 1RM) is defined as the maximum weight that one can lift for a given exercise (e.g. squats, bench press, etc.).</p>
      <p>The following formulas are currently used in the app:</p>
      <ul>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#Lombardi'>Lombardi</a></li>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#Epley'>Epley</a></li>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#McGlothin'>McGlothin</a></li>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki'>Brzycki</a></li>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#Mayhew'>Mayhew</a></li>
        <li><a href='https://en.wikipedia.org/wiki/One-repetition_maximum#Wathan'>Wathan</a></li>
      </ul>
      <h2>Technical</h2>
        <p>The app is written as an experimental progressive web app in the <a href='https://reactjs.org/' target='_blank'>React JavaScript library</a>.</p>
        <p>Find the source code for the app on <a href='https://github.com/ckjeldgaard/repmax' target='_blank'>GitHub</a>.</p>
    </article>;
  }
}