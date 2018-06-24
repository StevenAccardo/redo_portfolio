const axios = require('axios');
const mongoose = require('mongoose');
const Meetup = require('../models/Meetup');
const MEETUP_API_KEY = require('../config/keys').MEETUP_API_KEY;

const intervalFetch = async () => {
  let id, name, time, description, event_url, photo_url, groupName;
  try {
    const res = await axios.get(`https://api.meetup.com/dashboard?only=last_event&key=${MEETUP_API_KEY}`);
    //Pull off data from response
    ({ id, name, time, description, event_url, photo_url } = res.data.last_event);
    groupName = res.data.last_event.group.name;
    console.log('groupName', groupName);
  } catch (e) {
    console.log('Could not fetch Meetup data from API.', e);
  }

  try {
    //check DB by eventID to make sure the event isn't already stored
    const foundEvent = await Meetup.findOne({ eventID: id });
    if (!foundEvent && id) {
      console.log('entered');
      const meetup = new Meetup({
        eventID: id,
        eventName: name,
        eventTime: time,
        eventDescription: description,
        eventUrl: event_url,
        photoUrl: photo_url,
        groupName
      });
      await meetup.save();
      console.log('saved', meetup);
    }
  } catch (e) {
    console.log('Could not save the event to the DB', e);
  }
};

module.exports = intervalFetch;
