import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SocketConnector from "./socket_connector";
import {
  createChannelMessage
} from "../../../actions/message_actions";
import {
  createChannel,
  deleteChannel,
} from "../../../actions/channel_actions";
import { deleteServer } from "../../../actions/server_actions";
// import { foreignLeaveServer } from "../../../actions/subscription_actions";
// import { receiveUser } from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUserId,
  channelIds: Object.values(state.entities.channels)
    .map((channel) => channel.id),
});

const mapDispatchToProps = (dispatch) => ({
  createChannelMessage: (payload) => dispatch(createChannelMessage(payload)),
  deleteMessage: (payload) => dispatch(deleteMessage(payload)),
  createChannel: (payload) => dispatch(createChannel(payload)),
  editServer: (payload) => dispatch(editServer(payload)),
  deleteServer: (payload) => dispatch(deleteServer(payload))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SocketConnector)
);
