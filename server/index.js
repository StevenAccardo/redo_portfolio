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

// create({
//   eventID: '789',
//   eventName: 'test3',
//   eventTime: 1529744352,
//   eventDescription: 'testing3',
//   eventUrl: 'http://www.test.com',
//   photoUrl: 'http://www.test.com',
//   groupName: 'testGroup'
// });

//Middleware
app.use(bodyParser.json({ type: '*/*' }));

//Calls the imported intervalFetch callback every 24 hours;
setInterval(intervalFetch, 30000);

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
