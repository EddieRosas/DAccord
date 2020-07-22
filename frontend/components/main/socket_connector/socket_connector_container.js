import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { receiveMessage } from "../../../actions/message_actions";
import { fetchData } from "../../../actions/server_actions";

import SocketConnector from "./socket_connector";


const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = (dispatch) => ({
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  fetchData: () => dispatch(fetchData())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SocketConnector)
);
