import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MessageInput from './message_input';


const mapStateToProps = (state, ownProps) => {
  return({
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUserId: state.session.currentUserId
  })
};


export default withRouter(connect(mapStateToProps, null)(MessageInput));