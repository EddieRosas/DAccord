import React from 'react';

import UsersIndexListItemContainer from './users_index_list_item_container';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (
      Object.values(prevProps.servers).length !== 0 && 
      prevProps.servers[this.props.currentServerId].userIds.length !== 
        this.props.servers[this.props.currentServerId].userIds.length
    ) {
      this.props.fetchUsers(this.props.currentServerId)
    }
    // if (Object.values(prevProps.servers).length !== 0) {
    //   let prev_userIds = prevProps.servers[this.props.currentServerId].userIds
    //   let new_userIds = this.props.servers[this.props.currentServerId].userIds
    //   if (prev_userIds[prev_userIds.length - 1] !== new_userIds[new_userIds.length -1]) {
    //     this.props.fetchUser(new_userIds[new_userIds.length - 1])
    //   }
    // }

  }

  render() {
    let serverOwnerId;
    if (!!this.props.users) {
      serverOwnerId = 
      this.props.servers[this.props.match.params.serverId].ownerId;
    } else {
      return null;
    }
    
    const list = this.props.users.map((user) => (
      <UsersIndexListItemContainer key={user.id} user={user} serverOwnerId={serverOwnerId} />
    ));

    return (
      <section id="users-index">
        <div id="users-index-content">
          <div id="users-index-user-header">USERS</div>
          <div id="users-index-user-list">{list}</div>
        </div>
      </section>
    );
  }
}

export default UsersIndex;