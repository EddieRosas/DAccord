import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageInput from './message_input';
import { createChannelMessage } from '../../../actions/message_actions';
import { receiveMessage } from "../../../actions/message_actions";


const mapStateToProps = (state, ownProps) => {
  return({
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUserId: state.session.currentUserId
  })
};


const mapDispatchToprops = (dispatch) => {
  return (
      {
        createMessage: (message, channelId) => dispatch(createChannelMessage(message, channelId)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
      }
  )
}


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(MessageInput));