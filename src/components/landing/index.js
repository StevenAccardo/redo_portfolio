import React from 'react';
import LandingDetails from './landingDetails';
import Skills from './skills';
import Questions from './questions';

const Landing = () => {
  return (
    <section className="landing">
      <LandingDetails />
      <Skills />
      <Questions />
    </section>
  );
};

export default Landing;
