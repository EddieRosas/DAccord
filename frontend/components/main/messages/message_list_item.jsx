import React from "react";

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }


    render() {
    
      if (!!this.props.message && Object.values(this.props.users).length > 1) {
        const body = this.props.message.body;
        const username = this.props.users[this.props.message.author_id].username;
        const imageUrl = this.props.users[this.props.message.author_id].imageUrl;

        return (
          <div className="message-container">
            <img className="message-user-image"  src={imageUrl} />
            <div className="message-username">{username}</div>
            <div className="message-body">{body}</div>
          </div>
        );
        } else {
        return null;
      }
    }
}

export default MessageListItem;
