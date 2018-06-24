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
  eventID: 'hfzzqpyxjbkc',
  eventName: 'Data Science Meetup',
  eventTime: 1529542800000,
  eventDescription:
    '<p>“ TheDevMasters and Crescent Solutions would like to invite you to join us for a night of Pizza, Networking, and a hands-on Machine Learning workshop! Bring your appetite and laptop, and enjoy an informative and interactive discussion with fellow data science enthusiasts. “<br/><br/>6:00 – Pizza and Mingling<br/><br/>6:30 - TheDevMasters presentation- The Importance of Data Science<br/><br/>theDevMasters, a GBCS LLC company, focusing on educational services to companies and individuals using our applied labs methodology. Whether you are looking for educational enhancement, a salary boost, or a career change, we can help you achieve your goal in the shortest amount of time.<br/><br/>6:45 - Hands-on machine learning session<br/><br/>This is a free workshop for anyone interested in learning about data science using Python. We will be coding as a group with examples and exercises led by the instructor. You’ll learn the basics of data science using Python programming and you’ll leave the workshop with the knowledge and skills to learn more advanced topics and specific toolkits.<br/><br/>Please bring your laptop to code along. No prior programming experience necessary! We recommend creating an account on cocalc.com to code along in Jupyter notebook.<br/><br/>We like to keep these sessions small to make sure everyone is able to ask questions and get help, so please RSVP on meetup to reserve your spot.</p>',
  eventUrl: 'https://www.meetup.com/OC-Tech-Society/events/251085616/',
  photoUrl: 'https://secure.meetupstatic.com/photos/event/b/3/a/f/highres_471825999.jpeg',
  groupName: 'From Crescent Solutions- Tech Meetup'
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
