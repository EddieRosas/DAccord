import { connect } from 'react-redux';
import MessageList from './message_list';
import { withRouter } from 'react-router-dom';
import { getChannelMessages } from '../../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  let messages;
  if (!!state.entities.messages) {
      messages = Object.values(state.entities.messages)
      messages = messages.filter(
      (message) =>
        Number(message.channel_id) === Number(ownProps.location.pathname.slice(-1))
    );
  }

  return ( 
    {
        messages: messages || undefined,
        users: state.entities.users,
      channel: state.entities.channels[ownProps.location.pathname.slice(-1)]
    }
  )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return(
        {
            getChannelMessages: channelId => dispatch(getChannelMessages(channelId))
        }
    )
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));