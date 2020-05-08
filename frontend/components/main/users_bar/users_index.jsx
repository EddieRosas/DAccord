import React from 'react';


import UsersIndexListItemContainer from './users_index_list_item_container';

class UsersIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        // const list = this.props.members.map(member => <UsersIndexListItemContainer key={member.id} user={member} />);

        return (
            <section id="users-index">
                <div id="users-index-content">
                    <div id="users-index-user-header">USERS</div>
                    <div id="users-index-user-list">..of a server will be displayed here</div>
                </div>
            </section>
        )
    }
}

export default UsersIndex;