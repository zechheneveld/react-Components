import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ComponentF from "./ComponentF";
import ComponentProps from "./ComponentProps";
import ComponentOld from "./ComponentOld";
import ComponentC from "./ComponentC";
import ComponentState from "./ComponentState";
import ComponentCycle from "./ComponentCycle";



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Hello Zech</h1> 
        <ComponentF/>
        <ComponentProps luckyNumber={52}/>
        <ComponentOld slang="yo"/>
        <ComponentC/>
        <ComponentState/>
        <ComponentCycle/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
