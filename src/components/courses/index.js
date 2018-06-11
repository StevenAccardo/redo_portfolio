import React from 'react';

const Courses = () => {
  return (
    <div className="courses">
      <h5 className="courses__header">A list of courses I have completed!</h5>
      <div className="courses__list">
        <a className="courses__link" target="_blank" href="https://www.udemy.com/server-side-rendering-with-react-and-redux/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Server Side Rendering with React and Redux</h5>
              <ul className="courses__subList">
                <li>Architectural considerations of building a server side rendered app</li>
                <li>Webpack-powered front and and backend app together</li>
                <li>Use React Router on both client and server side</li>
                <li>Implement Redux on both client and server side</li>
                <li>Communicate data from server to client using Redux initial state to the React application</li>
                <li>Secure application from common XSS attacks caused by state rehydration</li>
                <li>Handle errors and redirects properly that occur during the server rendering process</li>
                <li>Authenticate your users with cookie-based authentication during the server rendering phase</li>
                <li>Proxy setup for authenticated requests to external API</li>
                <li>Work with React-Helmet for SEO setup</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Node with React: Fullstack Web Development</h5>
              <ul className="courses__subList">
                <li>React, Redux, React Router, Redux Form</li>
                <li>Node and Express Setup</li>
                <li>Authentication Flow with Google OAuth</li>
                <li>Passport Library and Strategies</li>
                <li>MongoDB and Mongoose</li>
                <li>Cookies for Authentication</li>
                <li>Stripe Library for Online Payments</li>
                <li>Sendgrid Library for Generating E-mail Campaigns</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/react-redux-tutorial/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Advanced React and Redux</h5>
              <ul className="courses__subList">
                <li>Application Testing with Chai and Mocha</li>
                <li>Higher Order Components</li>
                <li>Middleware</li>
                <li>Node and Express</li>
                <li>2 Server Setup (1 Client, 1 API)</li>
                <li>MongoDB and Mongoose</li>
                <li>Client and Server-side Authentication Flow</li>
                <li>JSON Web Tokens</li>
                <li>BCrypt and Salting</li>
                <li>Passport Library and Strategies</li>
                <li>Progromatic Navigation with React Router</li>
                <li>Redux Form</li>
                <li>Redux Thunk</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/react-redux/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Modern React with Redux</h5>
              <ul className="courses__subList">
                <li>React Basics</li>
                <li>JSX</li>
                <li>Props</li>
                <li>Class and Functional Components</li>
                <li>Component Level State</li>
                <li>Redux</li>
                <li>Actions, Action Creators, and Reducers</li>
                <li>Middleware</li>
                <li>React Router</li>
                <li>Redux Form</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/understand-javascript/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">JavaScript: Understanding the Weird Parts</h5>
              <ul className="courses__subList">
                <li>Deeper dive into core concepts</li>
                <li>Execution Stack</li>
                <li>Hoisting</li>
                <li>Closures</li>
                <li>Lexical Scope</li>
                <li>"this"</li>
                <li>Prototypal Inheritence</li>
                <li>and More!</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="courses__link" target="_blank" href="https://www.udemy.com/javascript-es6-tutorial/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">ES6 JavaScript: The Complete Developer's Guide</h5>
              <ul className="courses__subList">
                <li>Array Iteration Methods</li>
                <li>Template Strings</li>
                <li>Arrow Functions</li>
                <li>Enhanced Object Literals</li>
                <li>Default Function Arguments</li>
                <li>Rest and Spread Operator</li>
                <li>Destructuring</li>
                <li>Classes</li>
                <li>Generators</li>
                <li>Promises and Fetch</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/advanced-css-and-sass/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Advanced CSS and Sass</h5>
              <ul className="courses__subList">
                <li>@keyframes, animation and transition</li>
                <li>pseudo-classes and pseudo-elements</li>
                <li>CSS Fundamental Concepts</li>
                <li>CSS architecture</li>
                <li>Sass: variables, nesting, partials, imports, mixins, functions, extends, setting global variables, building for reusability, architecting CSS and managing media queries</li>
                <li>NPM Scripting</li>
                <li>Advanced responsive design workflows</li>
                <li>Responsive images in HTML and CSS for faster pageloads: resolution switching, density switching, art direction</li>
                <li>SVG images in HTML and CSS</li>
                <li>Videos in HTML and CSS</li>
                <li>Flexbox layouts</li>
                <li>CSS Grid layouts</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/web-developer-course/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Ultimate Web Designer & Developer Course</h5>
              <ul className="courses__subList">
                <li>Web Design Concepts</li>
                <li>Wire Framing</li>
                <li>Arrow Functions</li>
                <li>Basic Visual Editing</li>
                <li>HTML5 Concepts</li>
                <li>CSS3 concepts</li>
                <li>JavaScript & jQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/webpack-2-the-complete-developers-guide/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Webpack 2: The Complete Developer's Guide</h5>
              <ul className="courses__subList">
                <li>Webpack Overview</li>
                <li>Babel Setup</li>
                <li>CSS Module Setup and Loaders</li>
                <li>Image Loaders for Image Compression</li>
                <li>Codesplitting</li>
                <li>Vendor Splitting</li>
                <li>Chunk Hashing and Cache Busting</li>
                <li>Webpack Dev Server</li>
                <li>Static and Dynamic Site/App Deployment</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" target="_blank" href="https://www.udemy.com/github-ultimate/learn/v4/overview">
          <div className="courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">GitHub Ultimate: Master Git and Github</h5>
              <ul className="courses__subList">
                <li>Git Basics(Initialization, Staging, Commits)</li>
                <li>Git History and Reset</li>
                <li>Branching and Merging</li>
                <li>GitHub and GitHub Repos</li>
                <li>Pushing and Revert</li>
                <li>P4Merge</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="courses__link" href="">
          <div className=" courses__card">
            <div className="course__body">
              <h5 className="courses__bodyTitle">Additional Coursework</h5>
              <ul className="courses__subList">
                <li>ECE 15 Engineering Computation (C++ Coding) - UCSD</li>
                <li>CISC 192 C/C++ Programming - San Diego Miramar Junior College</li>
                <li>Introduction to Computer Science and Programming using Python – MIT MOOC</li>
                <li>Vanilla JS in the Browser Workshop - San Diego JavaScript Users Group</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Courses;
