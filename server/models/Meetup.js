const mongoose = require('mongoose');
const { Schema } = mongoose;

const MeetupSchema = new Schema(
  {
    eventID: String,
    eventName: String,
    eventTime: Date,
    eventDescription: String,
    eventUrl: String,
    photoUrl: String,
    groupName: String
  },
  { timestamps: true }
);

const Meetup = mongoose.model('Meetup', MeetupSchema);

module.exports = Meetup;
