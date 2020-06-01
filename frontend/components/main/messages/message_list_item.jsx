import React from "react";

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    debugger
    const firstMessage = Object.values(this.props.messages)[0];
    const otherMessages = Object.values(this.props.messages).slice(1);
    const firstMessageContent =
        <span className="message-first-content-text">
          {firstMessage.body} 
        </span>
    const otherMessagesContent = otherMessages.map((message) => (
      <div key={message.id} className="message-other-container">
      </div>
    ));
    const username = this.props.users[firstMessage.author_id].username;
    const userImageUrl = this.props.users[firstMessage.author_id].imageUrl;

    return (
      <div className="message-block" onKeyDown={this.handlePress}>
        <div className="message-first-container">
          <img className="message-user-image" src={userImageUrl}></img>
          <div className="message-first-body">
            <div className="message-header-container">
              <span className="message-header-username">{username}</span>
            </div>
            {firstMessageContent}
          </div>
        </div>
        {otherMessagesContent}
      </div>
    );
  }
}

export default MessageListItem;
