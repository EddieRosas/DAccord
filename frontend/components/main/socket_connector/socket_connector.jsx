import React from "react";


class SocketConnector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData()
      .then((res) => this.createSubscriptions(res.payload.channels)
    )
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
    Object.values(channels).map((channel) =>
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
