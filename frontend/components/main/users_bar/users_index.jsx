import React from 'react';

import UsersIndexListItemContainer from './users_index_list_item_container';

class UsersIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     if ((this.props.match.params.serverId) && (this.props.match.params.serverId !== "@me")) {
    //         this.props.fetchUsers(this.props.match.params.serverId)
    //     }
    // }
    

    componentDidUpdate(prevProps) {
        if (
          prevProps.match.params.serverId !==
            this.props.match.params.serverId &&
          this.props.match.params.serverId !== "@me"
        ) {
          this.props.fetchUsers(this.props.match.params.serverId);
        }
    }

    render() {
        if (Object.values(this.props.servers).length === 0)
            return null
        const list = this.props.users.map(user => <UsersIndexListItemContainer key={user.id} user={user} />);

        return (
            <section id="users-index">
                <div id="users-index-content">
                    <div id="users-index-user-header">USERS</div>
                    <div id="users-index-user-list">{list}</div>
                </div>
            </section>
        )
    }
}

export default UsersIndex;