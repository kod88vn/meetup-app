import React, { Component } from 'react';

class Event extends Component {
  state = {
    expanded: false,
  }

  onDetailsButtonClicked = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    const event = this.props.event;
    return (
      <div className="Event">
        <p className="time">{event.local_time} - {event.local_date}</p>
        <p className="name">{event.name}</p>
        {event.group && event.group.name && <p className="group-name">Group: {event.group.name}</p>}
        <p className="going">{event.yes_rsvp_count} people are going</p>
        {this.state.expanded &&
          <div className="moreInfo">
            {event.venue && event.venue.name &&
              <p className="address">
                {event.venue.name
                  + ', ' + event.venue.address_1
                  + ', ' + event.venue.city
                  + ', ' + event.venue.state
                }
              </p>
            }
            <div className="description" dangerouslySetInnerHTML={{__html: event.description}} />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event Link</a>
          </div>
        }
        <button className="detailsButton" onClick={this.onDetailsButtonClicked}>Details</button>
      </div>
    );
  }
}

export default Event;