import React from 'react';
import MessageListItemContainer from './message_list_item_container';


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView(); 
  }

  render() {
    const messages = this.props.messages
      ? this.props.messages.map((message) => (
          <MessageListItemContainer key={message.id} message={message} />
        ))
      : null;

    const welcomeMessage = 
        !!this.props.channel ?
          <div id="channel-welcome">
            Welcome to #{this.props.channel.name}!
          </div>
        : null

    return (
      <div id="message-display-container">
        <div id="message-display-inner-container">
          {welcomeMessage}
          <div>{messages}</div>
          <div ref={this.bottom} />
        </div>
      </div>
    );
  }
}

export default MessageList;