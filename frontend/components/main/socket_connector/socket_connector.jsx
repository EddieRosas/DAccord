import React from "react";
import Cable from "actioncable";
import { matchPath } from "react-router-dom";

class SocketConnector extends React.Component {
  constructor(props) {
    super(props);
    // this.chats = {};
    // this.createSockets = this.createSockets.bind(this);
    // this.createSocket = this.createSocket.bind(this);
    // this.actions = {
    //   createMessage: this.props.createMessage,
    //   createChannel: this.props.createChannel,
    //   deleteServer: this.props.deleteServer
    // };
  }

  // componentDidMount() {
  //   if (this.props.currentUser) {
  //     this.createSockets();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   let found = false;
  //   if (prevProps.channelIds.length < this.props.channelIds.length) {
  //     for (let i = 0; i < this.props.channelIds.length; i++) {
  //       if (prevProps.channelIds[i] !== this.props.channelIds[i]) {
  //         found = true;
  //         this.createSocket(this.props.channelIds[i]);
  //         break;
  //       }
  //     }
  //     if (!found)
  //       this.createSocket(
  //         this.props.channelIds[this.props.channelIds.length - 1]
  //       );
  //   } else if (prevProps.channelIds.length > this.props.channelIds.length) {
  //     for (let i = 0; i < prevProps.channelIds.length; i++) {
  //       if (prevProps.channelIds[i] !== this.props.channelIds[i]) {
  //         const identifier = `{"channel":"ServerChannel","id":${prevProps.channelIds[i]}}`;
  //         this.chats[identifier].unsubscribe();
  //         delete this.chats[identifier];
  //         break;
  //       }
  //     }
  //   }
  // }

  // componentWillUnmount() {
  //   const chats = Object.values(this.chats);
  //   chats.forEach((chat) => chat.unsubscribe());
  // }

  // createSockets() {
  //   let channelIds = this.props.channelIds;
  //   channelIds.forEach((id) => {
  //     this.createSocket(id);
  //   });
  // }

  // createSocket(id) {
  //   const sub = App.cable.subscriptions.create(
  //     {
  //       channel: "ServerChannel",
  //       id: id,
  //     },
  //     {
  //       connected: () => {},
  //       disconnected: () => {},
  //       received: (data) => {
  //         if (data.action == "deleteServer") {
  //           const match = matchPath(this.props.location.pathname, {
  //             path: "/channels/:serverId/:channelId",
  //           });
  //           if (match.params.channelId === Object.keys(data.payload.message.channelId) ) {
  //             this.props.history.push("/channels/@me");
  //           }
  //         }
  //         this.actions[data.action](data.payload.message);
  //       },
  //     }
  //   );
  //   this.chats[sub.identifier] = sub;
  // }

  // render() {
  //   return null;
  // }

  componentDidMount() {
      this.props
        .fetchChannels(this.props.currentServerId)
        .then((channels) => this.createSubscriptions(channels))

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
