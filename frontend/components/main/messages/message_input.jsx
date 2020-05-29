import React from 'react';

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: '',
            // channelId: this.props.match.params.channelId
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ content: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[1].speak({ message: this.state.content });
        this.setState({ content: "" });
    }

    render() {
        return (
            <div id="message-input-box-container">
                <form id="message-input-box-form" onSubmit={this.handleSubmit}>
                    <input id="message-input-box-input" type="text" value={this.state.content} onChange={this.handleChange}
                        placeholder="pzl work" autoComplete="off">
                    </input>

                    <input type="submit" id="submit-message" />
                </form>
            </div>
        )
    }
}

export default MessageInput;