const getMeetups = require('./controllers/getMeetups');

module.exports = app => {
  app.get('/meetups/api', getMeetups);
};
