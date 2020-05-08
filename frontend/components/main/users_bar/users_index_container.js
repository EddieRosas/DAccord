
import { connect } from 'react-redux';

import { fetchServer } from '../../../actions/server_actions';
import { fetchUsers } from '../../../actions/user_actions';
import { selectMembersByServer } from '../../../reducers/selectors';

import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => {
    
    
    return(
    {
    servers: state.entities.servers,
    users: Object.values(state.entities.users)
    }
    )
};

const mapDispatchToProps = dispatch => ({
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    fetchUsers: (serverId) => dispatch(fetchUsers(serverId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);