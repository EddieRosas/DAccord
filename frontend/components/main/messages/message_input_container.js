import { connect } from 'react-redux';
import MessageInput from './message_input';

// const mapStateToProps = (state, ownProps) => {
//     debugger
//     return(
//         {
//         currentUserId: state.session.currentUserId
//         // channelId: ownProps.params.channelId
//         }
//     )
// };



export default connect(null, null)(MessageInput);