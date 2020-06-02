
import { connect } from 'react-redux';

import { getChannelMessages } from "../../../actions/message_actions";
import { fetchServer } from '../../../actions/server_actions';
import { fetchUsers } from '../../../actions/user_actions';
import { selectMembersByServer } from '../../../reducers/selectors';

import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => {
    
    
    return(
    {
    servers: state.entities.servers,
    users: Object.values(state.entities.users),
    messages: state.entities.messages
    }
    )
};

const mapDispatchToProps = (dispatch) => ({
  fetchServer: (serverId) => dispatch(fetchServer(serverId)),
  fetchUsers: (serverId) => dispatch(fetchUsers(serverId)),
  getChannelMessages: (channelId) => dispatch(getChannelMessages(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);