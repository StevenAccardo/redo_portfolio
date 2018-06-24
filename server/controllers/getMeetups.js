const axios = require('axios');
const mongoose = require('mongoose');
const Meetup = require('../models/Meetup');
module.exports = async (req, res, next) => {
  //Find all meetups in model, and sort them in decending order by date of meetup.
  try {
    const meetupArr = await Meetup.find().sort({ eventTime: -1 });
    //Send back array of objects
    res.send(meetupArr);
  } catch (e) {
    console.log('Unable to retreive Meetups from DB');
    next(e);
  }
};
