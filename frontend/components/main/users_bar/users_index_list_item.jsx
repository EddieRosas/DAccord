import React from 'react';

class UsersIndexListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ownerLabel = (
            <div className="owner-label">
                &nbsp;
                (Owner)
            </div>
        )

        const ownsServer = 
            this.props.serverOwnerId === this.props.user.id ? 
                ownerLabel : null

        return (
            <div className="users-index-user-name">
                <img className="users-index-user-image" src={this.props.user.imageUrl}></img>
                <span className="users-index-user-text">{this.props.user.username} {ownsServer}</span>
            </div>
        )
    }

}

export default UsersIndexListItem;