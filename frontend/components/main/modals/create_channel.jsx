import React from 'react';

class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            server_id: this.props.match.params.serverId
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel({ channel: this.state });
        this.props.closeModal();
    }

    render() {
        return (
            <form className="channel-form" onSubmit={this.handleSubmit}>
                <h2 className="channel-header-label">create channel</h2>
                <label className="channel-form-label">Name</label>
                <input className="channel-form-input" type="text" onChange={this.handleChange("name")} type="text" value={this.state.name} />
                <div className="channel-button-container">
                    <button className="channel-cancel-button">Cancel</button>
                    <input className="channel-submit-button" type="submit" value="Create Channel" />
                </div>
            </form>
        )
    }
}

export default CreateChannel;
