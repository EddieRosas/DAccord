import React from 'react';

class JoinServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange() {
        return e => this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.closeModal();
        this.props.joinServer(this.state.name)
            .then((e) => this.props.history.push(`/channels/${e.server.id}`));
    }

    handleClick(modal) {
        return e => {
            e.preventDefault();
            this.props.openModal(modal);
        }
    }



    render() {
        const errors = this.props.errors.length > 0 ? <p id="server-join-error">{this.props.errors[0]}</p> : null;
        return (
            <div id="join-server-modal">
                <div id="join-server-form-top">
                    <h2 id="join-server-header">JOIN A SERVER</h2>
                    <h3 className="join-server-subheader" id="join-server-subheader-1">Enter server name of an existing server.</h3>
                    <div id="join-server-input-container">
                        <input id="join-server-name-input" onChange={this.handleChange()} type="text" value={this.state.name}></input>
                        <div id="join-server-label-container">
                            <label id="join-server-name-label">Enter Server name</label>
                            {errors}
                        </div>
                    </div>
                </div>
                <div id="join-server-buttons-bottom">
                    <div id="join-server-buttons-container">
                        <button onClick={this.handleClick("select")} id="join-server-back-button">
                            <img src={window.backToPrevIcon} id="join-server-back-icon" /> BACK
              </button>

                        <button onClick={this.handleSubmit} id="join-server-join-button">Join</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinServer;
