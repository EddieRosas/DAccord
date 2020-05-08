import React from 'react';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="message-display-container">
                <div id="message-box-inner-container">
                </div>
            </div>
        )
    }
}

export default MessageList;