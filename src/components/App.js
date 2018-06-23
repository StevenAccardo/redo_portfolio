import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Landing from './landing';
import Projects from './projects';
import Courses from './courses';
import Footer from './footer';
import Meetups from './meetups';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/meetups" component={Meetups} />
      <Footer />
    </div>
  );
};

export default App;
