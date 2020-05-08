import React from 'react';

class AddOrJoinServer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(modal) {
        return e => {
            e.preventDefault();
            this.props.openModal(modal);
        }
    }

    render() {
        return (
            <div id="add-or-join-server-modal">
                <h2 id="add-or-join-server-header">OH, ANOTHER SERVER HUH?</h2>
                <div id="add-or-join-server-buttons-container">
                    <button onClick={this.handleClick("create")} className="add-or-join-server-button" id="add-or-join-server-create-button">
                        <h3>CREATE</h3>
                        <p>Create a new server. It's free!</p>
                        <img className="add-or-join-server-image" src={window.createServerIcon}></img>
                        <div className="add-or-join-server-bottom-button" id="add-or-join-server-create-bottom-button">Create a server</div>
                    </button>
                    <button onClick={this.handleClick("join")} className="add-or-join-server-button" id="add-or-join-server-join-button">
                        <h3>JOIN</h3>
                        <p>Enter a server name to join your friend's server.</p>
                        <img className="add-or-join-server-image" src={window.joinServerIcon
                        }></img>
                        <div className="add-or-join-server-bottom-button" id="add-or-join-server-join-bottom-button">Join a server</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default AddOrJoinServer;