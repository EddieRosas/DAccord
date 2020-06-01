import React from "react";

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    const body = this.props.message.body;
    const username = this.props.users[this.props.message.author_id].username;
    const imageUrl = this.props.users[this.props.message.author_id].imageUrl;

    return (
      <div>
        <div className="message-username">
          {username}
        </div>
        <div className="message-body">
          {body}
        </div>
        <div className="message-user-image">
          <img src={imageUrl} />
        </div> 
      </div>
    );
  }
}

export default MessageListItem;
