import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetups, meetup } from '../../actions';
class Meetups extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }
  render() {
    return (
      <div>
        <h1>Meetups</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ meetup }) => ({ meetup });

export default connect(
  mapStateToProps,
  { fetchMeetups }
)(Meetups);
