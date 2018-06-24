const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const MONGO_URI = require('./config/keys').MONGO_URI;
const meetupRouter = require('./meetupRouter');
const intervalFetch = require('./helper/meetupHelper');
const create = require('./helper/popDB');

const app = express();

mongoose.connect(MONGO_URI);

//strictly for adding test cases into the db
create({
  eventID: '250852674',
  eventName: 'OC version: Learn Modern Frontend Web-Development with Vue.js w/Kobi Levy',
  eventTime: 1529461800000,
  eventDescription:
    '<p>Find more details about this event and register for this unusual meetup on Eventbrite: <a href="https://www.eventbrite.com/e/oc-version-learn-modern-frontend-web-development-with-vuejs-wkobi-levy-tickets-46165185312" class="linkified">https://www.eventbrite.com/e/oc-version-learn-modern-frontend-web-development-with-vuejs-wkobi-levy-tickets-46165185312</a><br/>Registering Via Eventbrite ensures that you are included in the headcount and gets you a raffle ticket.</p> <p>Vue.js makes frontend Web-Development fun!</p> <p>For anyone interested in *any* frontend web development</p> <p>- if you are *interested* of React or Angular, then Vue.js might be a better place to start<br/>- all of the concepts taught in much friendlier code<br/>- once you understand how everything flows together, then it will be trivial to switch<br/>(don\'t learn concepts where the syntax is difficult to understand, learn Vue.js first)</p> <p>About the presenter:</p> <p>Kobi Levy have always wanted to be a software developer, both to accomplish a personal goal -- to be able to build things -- and as a professional goal, to use as a skill in the business world. A few years ago, he started learning on his own. In time he met others who were interested in learning to code, and they continued to pursue our shared passion for building awesome stuff on the web.</p> <p>Today, he\'s a full-stack web developer. -- and he\'s pretty damn awesome!</p>',
  eventUrl: 'https://www.meetup.com/javascript-southbay/events/250852674/',
  photoUrl: 'https://secure.meetupstatic.com/photos/event/5/f/c/1/highres_471744513.jpeg',
  groupName: 'JavaScript South Bay & OC  | A Chapter of JavaScriptLA'
});

//Middleware
app.use(bodyParser.json({ type: '*/*' }));

//Calls the imported intervalFetch callback every 24 hours;
setInterval(intervalFetch, 28800000);

//router
meetupRouter(app);

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev');

  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.dev.js');

  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => console.log('Listening on port:', port));
