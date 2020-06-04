import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchChannels } from "../../../actions/channel_actions";
import { createChannelMessage } from "../../../actions/message_actions";
import { receiveMessage } from "../../../actions/message_actions";

import { fetchData } from "../../../actions/server_actions";
import SocketConnector from "./socket_connector";

const mapStateToProps = (state, ownProps) => {
  return ({
  currentServerId: ownProps.match.params.serverId,
  currentUser: state.session.currentUserId,
  channels: Object.values(state.entities.channels)
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
  createChannelMessage: (payload) => dispatch(createChannelMessage(payload)),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  fetchData: () => dispatch(fetchData())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SocketConnector)
);
