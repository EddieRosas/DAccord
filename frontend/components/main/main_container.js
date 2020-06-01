import { connect } from 'react-redux';
import Main from './main';
import { withRouter } from 'react-router-dom'
import { logout } from '../../actions/session_actions';
// import { getChannelMessages, receiveMessage} from '../../actions/message_actions';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    
});

// const mapDispatchToProps = dispatch => {
//     return(
//         {
//             getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
//             subscribeToChannelMessages: (channelId) => subscribeToChannelMessages(channelId, dispatch),
//         }
//     )
// }


export default withRouter(connect(
    mapStateToProps,
    null
)(Main))