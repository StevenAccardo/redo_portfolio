const mongoose = require('mongoose');
const Meetup = require('../models/Meetup');

const create = async obj => {
  try {
    //check DB by eventID to make sure the event isn't already stored
    const meetup = new Meetup(obj);
    await meetup.save();
  } catch (e) {
    console.log('Could not save the event to the DB', e);
  }
};

module.exports = create;
