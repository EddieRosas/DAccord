import React from 'react';

import UsersIndexListItemContainer from './users_index_list_item_container';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
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