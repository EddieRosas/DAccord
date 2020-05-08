import React from 'react';

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ content: e.target.value })
    }

    render() {
        if (this.props.channel === undefined) return null;
        return (
            <div id="message-input-box-container">
                <form id="message-input-box-form" >
                    <input id="message-input-box-input" type="text" value={this.state.content} onChange={this.handleChange}
                        placeholder="eventually type here" autoComplete="off">
                    </input>
                </form>
            </div>
        )
    }
}

export default MessageInput;