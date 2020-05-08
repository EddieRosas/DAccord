import React from 'react';

class DeleteServer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const server = this.props.servers[this.props.match.params.serverId].id
        this.props.closeModal()
        this.props.deleteServer(server)
            .then(() => this.props.history.push('/channels/@me'))
        // this.props.history.push('/channels/@me')
    }


    handleCancel(e) {
        e.preventDefault()
        this.props.closeModal();
    }

    render() {
        return (
            <form className="channel-form" onSubmit={this.handleSubmit}>
                <h2 className="channel-header-label">Delete Server</h2>
                <h3 id="channel-delete-subheader">Are you sure you want to delete this server?</h3>
                <h3 id="channel-delete-subheader2">This action cannot be undone.</h3>
                <img className="channel-delete-image" src={window.channelDestroyBomb}></img>
                <div className="channel-button-container">
                    <button className="channel-cancel-button" onClick={this.handleCancel}>Cancel</button>
                    <input className="channel-submit-button" type="submit" value="Delete Server" />
                </div>
            </form>
        )
    }

}

export default DeleteServer;