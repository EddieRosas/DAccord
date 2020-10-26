import { connect } from 'react-redux';

import { fetchUsers, fetchUser } from '../../../actions/user_actions'
import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => {
    let users;
    if (Object.values(state.entities.users).length > 1) {
      users = Object.values(state.entities.users);
      users = users.filter((user) => 
        state.entities.servers[ownProps.match.params.serverId].userIds.includes(user.id)
      )
    }
    
    return(
      {
        servers: state.entities.servers,
        users: users,
        currentServerId: ownProps.match.params.serverId
      }
    )
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      fetchUsers: (serverId) => dispatch(fetchUsers(serverId)),
      fetchUser: (userId) => dispatch(fetchUsers(userId))
    }
  )

}


export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);