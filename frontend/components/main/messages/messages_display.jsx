import React from 'react';
import { Route } from 'react-router-dom';

import MessageListContainer from './message_list_container';
import MessageInputContainer from './message_input_container';


class MessagesDisplay extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section id="message-box">
                <div id="message-box-inner">
                    <MessageListContainer />
                    <MessageInputContainer />
                </div>
            </section>
        )
    }
}

export default MessagesDisplay;