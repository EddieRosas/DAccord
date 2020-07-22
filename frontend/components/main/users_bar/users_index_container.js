import { connect } from 'react-redux';

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
      }
    )
};


export default connect(mapStateToProps, null)(UsersIndex);