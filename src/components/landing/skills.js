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
            <li className="skills__header">Front-End Development</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>A strong grasp of JavaScript, React, Redux, and the React Ecosystem
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Redux stores, reducers, actions, action creators, middleware, HTTP Requests, and core react methodologies
                </li>
              </ul>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Semantic HTML, Sass, CSS, Mobile & Desktop First Responsive Development
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>BEM methodology, media queries, responsive images, CSS Grids, Flexbox, Bootstrap, and more.
                </li>
              </ul>
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Setup my own build system using Webpack and NPM Scripts
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Hashing, Code Splitting, Image Compression, and etc.
                </li>
              </ul>
            </ul>
            <li className="skills__header">Back-End Development</li>
            <ul className="skills__subHeader">
              <li className="skills__item">
                <span className="skills__arrow">&rarr; </span>Server and API Creation with Node.js and Express.js
              </li>
              <ul>
                <li className="skills__subItem">
                  <span className="skills__arrow">&rarr; </span>Create servers and APIs from scratch, handle routing, implement various authentication flows, and create/work with middleware
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
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
