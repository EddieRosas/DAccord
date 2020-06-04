import React from 'react';

import UsersIndexListItemContainer from './users_index_list_item_container';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

    componentDidMount() {
        // if (this.props.match.params.serverId !== "@me" ) {
        //     this.props.getChannelMessages(this.props.location.pathname.slice(-1));
        // }
    }

    componentDidUpdate(prevProps) {
        // if ( ((this.props.users.length >= 2) && (this.props.match.params.channelId !== prevProps.match.params.channelId) ) || 
        //     Object.values(prevProps.messages).length !== Object.values(this.props.messages).length ) {
        //     this.props.getChannelMessages(this.props.location.pathname.slice(-1));
        // }
    }

  render() {
    if (Object.values(this.props.servers).length === 0) return null;
    const list = this.props.users.map((user) => (
      <UsersIndexListItemContainer key={user.id} user={user} />
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