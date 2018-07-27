import React from 'react';
import gitImg from '../../../assets/images/github_spin.png';

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__header u-head-primary">Projects</h1>
      <a target="_blank" href="https://www.github.com/stevenaccardo" className="projects__gitLink">
        <img src={gitImg} alt="GitHub Link" className="projects__gitImg" />
      </a>
      <div className="projects__project-list">
        <a className="projects__link" target="_blank" href="https://stark-gorge-75040.herokuapp.com/">
          <div className="projects__box">
            <div className="projects__img projects__img--chatterBox" />
            <div className="projects__text">
              <h1 className="projects__title">Chatter.Box</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>Node, Express, Socket.io, jQuery, Mustache, Moment, Mocha, Expect
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>WebSocket Connections</li>
                <li>HTML5 Geolocation</li>
                <li>Mobile Responsive</li>
                <li>Node and Express Server</li>
                <li>Real-time data transfer</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Allows the user to enter private chat rooms</li>
                <li>Only users in the same chat cna see each other's messages</li>
                <li>Messages are received in real-time</li>
                <li>A real-time user list is shown for each chat room</li>
                <li>Users receive automatic updates when a user joins or leaves the chat room</li>
                <li>Users can share their location with other users in the chat room via a Google Map link</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="projects__link" target="_blank" href="https://salty-temple-54689.herokuapp.com/">
          <div className="projects__box">
            <div className="projects__img projects__img--weatherApp" />
            <div className="projects__text">
              <h1 className="projects__title">The Weather App</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>React, Redux, Redux-Thunk, Node, Express, Axios, Jest, Enzyme, Sass, and Webpack
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>HTML5 Geolocation</li>
                <li>Mobile Responsive</li>
                <li>Protect API key by making requests to server as a proxy</li>
                <li>Node and Express Server for Serving Static Files and making Requests to the API</li>
                <li>Dynamic rending of grid system</li>
                <li>data manipulation of API response</li>
                <li>Unit Testing with Jest and Enzyme</li>
                <li>Prop Type Checking</li>
                <li>Uses SVGs</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>App automatically fetches weather data if HTML5 Geoloation is allowed</li>
                <li>Retrieves current weather</li>
                <li>Retrieves 4 day forecast</li>
                <li>Renders data in both imperial and metric units</li>
                <li>Renders a different background image depending on the time of day</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="projects__link" target="_blank" href="http://www.majestic-nest.surge.sh/">
          <div className="projects__box">
            <div className="projects__img projects__img--nexter" />
            <div className="projects__text">
              <h1 className="projects__title">Nexter</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>HTML, Sass, NPM Scripts
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>CSS Grids</li>
                <li>Sass: variables, mixins, nesting, and import/partials</li>
                <li>Media Queries & Responsive Design</li>
              </ul>
              <h5 className="projects__appFeatures">Website Features:</h5>
              <ul className="projects__featuresList">
                <li>Stylish Features</li>
              </ul>
            </div>
          </div>
        </a>

        <a className="projects__link" target="_blank" href="http://www.reflective-name.surge.sh/">
          <div className="projects__box">
            <div className="projects__img projects__img--bookall" />
            <div className="projects__text">
              <h1 className="projects__title">BookAll</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>HTML, Sass, NPM Scripts
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>FlexBox</li>
                <li>Sass: variables, mixins, nesting, and import/partials</li>
                <li>Media Queries & Responsive Design</li>
                <li>Animations</li>
              </ul>
              <h5 className="projects__appFeatures">Website Features:</h5>
              <ul className="projects__featuresList">
                <li>Stylish Features</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="http://www.hard-to-find-quill.surge.sh/">
          <div className="projects__box">
            <div className="projects__img projects__img--natours" />
            <div className="projects__text">
              <h1 className="projects__title">Natours</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>HTML, Sass, NPM Scripts
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Sass: variables, mixins, nesting, and import/partials</li>
                <li>Media Queries & Responsive Design</li>
                <li>Animations</li>
              </ul>
              <h5 className="projects__appFeatures">Website Features:</h5>
              <ul className="projects__featuresList">
                <li>Stylish Features</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="https://sheltered-depths-53413.herokuapp.com">
          <div className="projects__box">
            <div className="projects__img projects__img--bloggerClient" />
            <div className="projects__text">
              <h1 className="projects__title">Blogger App - Client Side</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>React, React Router, Redux, ReactStrap, Sass, Bootstrap, Marked, Superagent, and Webpack
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Makes HTTP Requests to API in Order to Execute CRUD Methods</li>
                <li>User Auth Flow with JWT, Validation, and LocalStorage</li>
                <li>Application Routing</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Allows Users to Write/Edit/Delete Articles and View Other's Articles</li>
                <li>Follow and Unfollow Other Users</li>
                <li>Like and Unlike Articles</li>
                <li>Ability to Create and Delete Comments</li>
                <li>Personal, Global, and Tagged Feeds</li>
                <li>Full Auth Flow with Profile Setup</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="https://sheltered-depths-53413.herokuapp.com">
          <div className="projects__box">
            <div className="projects__img projects__img--bloggerAPI" />
            <div className="projects__text">
              <h1 className="projects__title">Blogger API</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>Node, Express, Mongoose, MongoDB, Passport, CORS, Express JWT, JSON Web Token
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Utilizes CORS Library to Allow for Multi-Origin Requests</li>
                <li>JWT, Salt, and Hashing for Authentication</li>
                <li>Persists User Data, Articles, and Comments</li>
                <li>Parses Both JSON and URL Encoded Requests</li>
                <li>Allows CRUD methods</li>
                <li>Error Handling</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Stores User Login and Profile Information</li>
                <li>Stores Articles, Like Count, and Comments</li>
                <li>Authenticates Users and Determines Data in Response</li>
                <li>Allows Querying of Article and Comment Lists, Profiles, and Individual Articles</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="https://performancesociety.herokuapp.com">
          <div className="projects__box">
            <div className="projects__img projects__img--performance" />
            <div className="projects__text">
              <h1 className="projects__title">Performance Society</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>React, React Router, Redux, Redux Form, ReactStrap, Sass, Bootstrap, Node, Express, Mongoose, MongoDB, Passport, Bcrypt-Nodejs, Redux Thunk, and
                Webpack
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Utilizes YouTube API to Dynamically Retrieve Videos From Owner's YouTube Channel</li>
                <li>User Auth Flow with JWT, Validation, Salt, Hashing, and LocalStorage</li>
                <li>Persists User Data</li>
                <li>Iterates Through Data to Render Workouts and Articles</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Displays Daily Workouts</li>
                <li>Video List and Player Linked to Youtube Channel</li>
                <li>Selectable Article List and Display</li>
                <li>
                  Signup/Signin with Validation and Full Authentication Flow<span> - Currently Hidden</span>
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="https://pacific-basin-13124.herokuapp.com">
          <div className="projects__box">
            <div className="projects__img projects__img--emaily" />
            <div className="projects__text">
              <h1 className="projects__title">Emaily App</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>React, React Router, Redux, React-Redux, Redux Form, ReactStrap, Bootstrap, Axios, Redux Thunk, React Stripe Checkout, Webpack, Node, Express,
                Mongoose, MongoDB, Passport, Passport Google OAuth 2.0, Cookie Session, Send Grid, Local Tunnel, and Stripe
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Google Oauth 2.0</li>
                <li>Cookies Used for Repeat HTTP Requests with Authentication</li>
                <li>Utilizes HTML Template to Construct Survey E-mails</li>
                <li>Redux Form for Input and Validation</li>
                <li>Uses the Stripe API for Credit Card Payments</li>
                <li>Uses Send Grid For E-mail Campaigns via Webhooks</li>
                <li>Mongoose and MongoDB for persisting User Login Info, Account Balances, and Survey Info</li>
                <li>Utilizes HTML Template to Construct Survey E-mails</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Google OAuth 2.0 For Authentication</li>
                <li>Accepts User Payment to Purchase Credits</li>
                <li>Users Create Surveys Which Get E-mailed Out to Their Clients</li>
                <li>Stores User's Surveys and Tallies Client Responses</li>
              </ul>
            </div>
          </div>
        </a>
        <a className="projects__link" target="_blank" href="http://www.spiteful-structure.surge.sh">
          <div className="projects__box">
            <div className="projects__img projects__img--macro" />
            <div className="projects__text">
              <h1 className="projects__title">Macro App</h1>
              <p className="projects__techStack">
                <strong>Core Tech Stack: </strong>React, Redux, Redux Form, React-Easy-Chart, ReactStrap, Bootstrap, Webpack
              </p>
              <h5 className="projects__codeFeatures">Code Features:</h5>
              <ul className="projects__featuresList">
                <li>Persist Redux Form Data in Store</li>
                <li>Wizard Form Implementation</li>
                <li>Form Validation and RegEx</li>
                <li>Controlled Components</li>
              </ul>
              <h5 className="projects__appFeatures">App Features:</h5>
              <ul className="projects__featuresList">
                <li>Allows User Input and Selection of Dietary Metrics and Goals</li>
                <li>Calculates Multiple Metrics Based on User Input</li>
                <li>Displays and Allows Dynamic Adjustment of Metrics</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
