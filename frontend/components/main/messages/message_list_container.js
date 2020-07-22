import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MessageList from './message_list';


const mapStateToProps = (state, ownProps) => {
  let messages;
  if (!!state.entities.messages) {
      messages = Object.values(state.entities.messages)
      messages = messages.filter(
      (message) =>
        Number(message.channel_id) === Number(ownProps.match.params.channelId)
    );
  }

  return ( 
    {
      messages: messages || undefined,
      channel: state.entities.channels[ownProps.match.params.channelId]
    }
  )
};


export default withRouter(connect(mapStateToProps, null)(MessageList));
