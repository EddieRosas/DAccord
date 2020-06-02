import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body) {
      const message = {
        body: this.state.body,
        channelId: this.props.location.pathname.slice(-1),
        authorId: this.props.currentUserId
      };
      App.cable.subscriptions.subscriptions[1].speak(message)
      this.setState({ body: "" });
    }
  }

  render() {
    return (
      <div id="message-input-box-container">
        <form id="message-input-box-form" onSubmit={this.handleSubmit}>
          <input
            id="message-input-box-input"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="plz work"
            autoComplete="off"
          ></input>

          <input type="submit" id="submit-message" />
        </form>
      </div>
    );
  }
}

export default MessageInput;