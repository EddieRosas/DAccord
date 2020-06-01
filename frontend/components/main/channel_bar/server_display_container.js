import { getChannelMessages } from "../../../actions/message_actions";
import { connect } from 'react-redux';
import ServerDisplay from './server_display';

const mapStateToProps = (state, ownProps) => ({
    servers: state.entities.servers,
    currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => {
    return {
      getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerDisplay);