import React from 'react';


class MessageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ServerChannel" }, 
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.message)
                    });
                },
                speak: function (data) {
                    return this.perform("speak", data)
                }
            }
        );
    }

    render() {

        let messageList = this.state.messages.map((message, idx) => {
            return (
                <div key={idx} id="new-message">
                    <div id="message-content-box">
                        <p id="sender-message">{message}</p>
                    </div>
                </div>
            );
        });

        return (
            <div id="message-display-container">
                <div id="message-box-inner-container">
                    <div>
                        {messageList}
                    </div>
                </div>
                <div ref = { this.bottom } />
            </div>
        )
    }
}

export default MessageList;