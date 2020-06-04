import React from 'react';
import MessageListItemContainer from './message_list_item_container';


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidUpdate() {
    
  }

  render() {
    const messages = this.props.messages
      ? this.props.messages.map((message) => (
          <MessageListItemContainer key={message.id} message={message} />
        ))
      : null;

    return (
      <div id="message-display-container">
        <div id="message-display-inner-container">
          <div>{messages}</div>
        </div>
        <div ref={this.bottom} />
      </div>
    );
  }
}

export default MessageList;