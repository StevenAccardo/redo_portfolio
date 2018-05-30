import React, { Component } from 'react';
import Landing from './landing';
import Skills from './skills';
import Projects from './projects';
import Questions from './questions';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="main">
        <Landing />
        <Skills />
        <Projects />
        <Questions />
      </main>
    );
  }
}

export default Main;
