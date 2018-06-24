import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetups, meetups } from '../../actions';
class Meetups extends Component {
  componentDidMount() {
    if (!this.props.meetups) {
      this.props.fetchMeetups();
    }
  }

  renderMeetups(meetups) {
    return meetups.map(meetup => {
      const { eventID, eventName, eventDescription, eventTime, eventUrl, photoUrl, groupName } = meetup;
      const eventDate = new Date(eventTime).toDateString();
      return (
        <div key={eventID} className="event">
          <a href={eventUrl} className="event__link">
            <div className="event__infoContainer">
              <img src={photoUrl} alt="" className="event__img" />
              <div className="event__meta">
                <h1 className="event__name">{eventName}</h1>
                <h3 className="event__groupName">{groupName}</h3>
                <p className="event__desc" dangerouslySetInnerHTML={{ __html: eventDescription }} />
                <p className="event__time">{eventDate}</p>
              </div>
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    const { meetups } = this.props;

    if (meetups) {
      return (
        <div className="meetups">
          <h1 className="meetups__title">A list of recent Meetups I have attended.</h1>
          <h3 className="meetups__subTitle">I stay involved with the devlopment community in order to stay on the bleeding edge of tech, and to give back through knowledge sharing.</h3>
          <div className="meetups__eventsContainer">{this.renderMeetups(meetups)}</div>
        </div>
      );
    }
    return <h1 className="meetups__loading">Loading Meetups...</h1>;
  }
}

const mapStateToProps = ({ meetups }) => ({ meetups });

export default connect(
  mapStateToProps,
  { fetchMeetups }
)(Meetups);
