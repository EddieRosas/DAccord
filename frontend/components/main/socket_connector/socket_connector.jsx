import React from "react";
import Cable from "actioncable";
import { matchPath } from "react-router-dom";

class SocketConnector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    debugger
    if (!!this.props.channels) {
      this.createSubscriptions(this.props.channels)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.channels.length !== 0 &&
      prevProps.channels.length < this.props.channels.length
    ) {
      const newChannel = {
        channels: {
          channels: this.props.channels[this.props.channels.length - 1],
        },
      };
      this.createSubscriptions(newChannel);
    }
  }

  createSubscriptions(channels) {

    Object.values(channels.channels).map((channel) =>
      App.cable.subscriptions.create(
        { channel: "ServerChannel", channelId: channel.id },
        {
          received: (data) => {
            let messagePayload = {
              [data.message.id]: data.message,
            };
            this.props.receiveMessage(messagePayload);
          },
          speak: function (data) {
            return this.perform("speak", data);
          },
        }
      )
    );
  }

  render() {
    return null;
  }
}

export default SocketConnector;
