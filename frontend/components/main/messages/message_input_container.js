import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageInput from './message_input';
import { createChannelMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.location.pathname.slice(-1)],
});


const mapDispatchToprops = (dispatch) => {
        return (
            {
                createMessage: (message, channelId) => dispatch(createChannelMessage(message, channelId))
            }
        )
}


export default withRouter(connect(mapStateToProps, mapDispatchToprops)(MessageInput));