import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__box">
        <h2 className="skills__blurb u-head-primary">
          I've created a strong fundamental base, so that I can adapt to your company's needs quickly, fill any vacant roles, and get up and running with minimal oversite.
        </h2>
        <h4 className="skills__heading">What I will be able to add to your team:</h4>
        <div className="skills__listContainer">
          <ul className="skills__list">
            <li className="skills__header">React Development</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Strong grasp of React and accompanying libraries
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>React, Redux Stores, Reducers, Actions, Action Creators, Middleware, Http Requests, And Core React Methodologies
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Server-Side Rendering
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Testing with Jest and Enzyme
              </li>
            </ul>

            <li className="skills__header">JavaScript Development</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Again strong understanding here, I would say equal to a mid-level developer
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Use of ES2015 and beyond, array helpers, string templates, destructuring, arrow functions, classes, async/await, and etc.
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Understanding of fundamental JS concepts: hoisting, closures, event loop, scope, callbacks, promises, the this keyword, prototypal
                inheritance, and more
              </li>
            </ul>

            <li className="skills__header">Styling</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Responsive development - flexbox, grids, media queries, and image sizing
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Advanced CSS techniques to include animations, transitions, flex-box, grids, svgs, and more
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Sass - variables, mixins, nesting, partials, and imports
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Architecture - BEM methodology and Sass 7-1 file pattern
              </li>
            </ul>

            <li className="skills__header">Back-End Development</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Server and RESTful API Creation with Node.js and Express.js
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Create servers and RESTful APIs from scratch, handle routing, implement various authentication flows, and create/work with middlewares
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Ability to use HTTP and WebSocket Communication Protocols
                </li>
              </ul>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Data Persisting
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>MySQL and MongoDB/Mongoose schema creation and querying
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Method creation with Mongoose
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Memcaching with Redis
                </li>
              </ul>
            </ul>

            <li className="skills__header">Environment Setup</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Use webpack, webpack-dev-server, webpack-dev-middleware, and NPM scripts
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Setup file Hashing, Code Splitting, Image Compression, And Etc.
              </li>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Create client-side only, client and server, or separate client and server/API setups
              </li>
            </ul>

            <li className="skills__header">Soft Skills</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Professional Mindset
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Results focused mindset, whether providing a product or service. Results turn revenue
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Team orientated because we can achieve more together, but I'm definitely capable of working alone on tasks
                </li>
              </ul>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Driven and Goal Orientated
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Constantly learning and looking to challenge myself
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Open minded with an understanding that there will always be something to learn from others
                </li>
              </ul>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Friendly and Empathetic
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Very Approachable
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Happy to help others
                </li>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Capable of working with various personality types
                </li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
