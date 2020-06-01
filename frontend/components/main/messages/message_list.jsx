import React from 'react';
import MessageListItemContainer from './message_list_item_container';


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    if (Object.values(this.props.users) >= 2) {
        this.props.getChannelMessages(this.props.location.pathname.slice(-1))
    }
  }

  componentDidUpdate(prevProps) {
    debugger
    if (
      prevProps.location.pathname !== this.props.location.pathname &&
      Object.values(this.props.users) >= 2
    ) {
      this.props.getChannelMessages(this.props.location.pathname.slice(-1));
    }
  }

  render() {
    const messages = this.props.messages
      ? this.props.messages.map((message) => (
          <MessageListItemContainer key={message.id} message={message} />
        ))
      : null;

    return (
      <div id="message-display-container">
        <div id="message-box-inner-container">
          <div>{messages}</div>
        </div>
        <div ref={this.bottom} />
      </div>
    );
  }
}

export default MessageList;