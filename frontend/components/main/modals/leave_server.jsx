import React from 'react';

class LeaveServer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const userId = this.props.session.currentUserId;
        const serverId = Number(this.props.match.params.serverId);
        this.props.leaveServer(userId, serverId);
        this.props.history.push('/channels/@me');
        this.props.closeModal();
    }

    handleCancel(e) {
        e.preventDefault()
        this.props.closeModal();
    }

    render() {
        return (
            <form className="leave-server-modal" onSubmit={this.handleSubmit}>
                <h2 className="leave-server-header-label">Leave Server</h2>
                <h3 id="leave-server-delete-subheader">Are you sure you want to leave this server?</h3>
                <h3 id="leave-server-delete-subheader">You can join again at any time.</h3>
                <div className="leave-server-button-container">
                    <button className="leave-server-cancel-button" onClick={this.handleCancel}>Cancel</button>
                    <input className="leave-server-submit-button" type="submit" value="Leave Server" />
                </div>
            </form>
        )
    }

}

export default LeaveServer;