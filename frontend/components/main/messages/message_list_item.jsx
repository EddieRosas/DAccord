import React from "react";


class MessageListItem extends React.Component {
  constructor(props) {
  super(props);
    this.formatDate = this.formatDate.bind(this)
  }

  formatDate(dateTimeString) {
    let time = new Date(dateTimeString);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    Number(minutes) < 10 ?
      minutes = `0${minutes}`
      : null
    let amOrPm = "AM";
    if (hours > 12) {
      hours = hours - 12;
      amOrPm = "PM";
    }
    let day = time.getDate();
    let month = time.getUTCMonth() + 1
    let year = time.getFullYear();
    let abbreviatedTime = hours + ":" + minutes + ` ${amOrPm} `;
    let date = `${month}/${day}/${year}`
    return `${abbreviatedTime} on ${date}`;
  }

  render() {
    if (!!this.props.message && Object.values(this.props.users).length > 0) {
      const body = this.props.message.body;
      const username = !!this.props.users[this.props.message.author_id] ? 
        this.props.users[this.props.message.author_id].username : "User not in server";
      const imageUrl = !!this.props.users[this.props.message.author_id] ?
        this.props.users[this.props.message.author_id].imageUrl : null;
      const timeStamp = this.formatDate(this.props.message.created_at)

      return (
        <div className="message-container">
          <div className="message-head">
            <img className="message-user-image" src={imageUrl} />
            <div className="message-username">{username}</div>
          </div>
          <div className="message-body">
            {body}
            <div className="message-timestamp">
              sent at {timeStamp}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MessageListItem;
