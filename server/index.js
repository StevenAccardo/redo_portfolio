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
// create({
//   eventID: '250852674',
//   eventName: 'OC version: Learn Modern Frontend Web-Development with Vue.js w/Kobi Levy',
//   eventTime: 1529461800000,
//   eventDescription:
//     'test',
//   eventUrl: 'https://www.meetup.com/javascript-southbay/events/250852674/',
//   photoUrl: 'https://secure.meetupstatic.com/photos/event/5/f/c/1/highres_471744513.jpeg',
//   groupName: 'JavaScript South Bay & OC  | A Chapter of JavaScriptLA'
// });

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
