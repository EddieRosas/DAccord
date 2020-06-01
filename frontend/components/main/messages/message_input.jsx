import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      channelId: this.props.location.pathname.slice(-1),
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
        message: { body: this.state.body },
      };
      this.props.createMessage(message, this.props.channel.id);
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
            placeholder="pzl work"
            autoComplete="off"
          ></input>

          <input type="submit" id="submit-message" />
        </form>
      </div>
    );
  }
}

export default MessageInput;