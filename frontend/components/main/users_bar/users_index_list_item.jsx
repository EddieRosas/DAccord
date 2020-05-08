import React from 'react';

class UsersIndexListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="users-index-user-name">
                <img className="users-index-user-image" src={this.props.user.imageUrl}></img>
                <p className="users-index-user-text">{this.props.user.username}</p>
            </div>
        )
    }

}

export default UsersIndexListItem;