import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const createMessage = (payload) => ({
  type: CREATE_MESSAGE,
  payload,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveMessages = ({ messages }) => ({
    type: RECEIVE_MESSAGES,
    messages
});

export const receiveMessage = ({ message, channelId, authorId }) => ({
    type: RECEIVE_MESSAGE,
    message,
    channelId,
    authorId
});


export const getChannelMessages = (channelId) => dispatch => (
    APIUtil.getChannelMessages(channelId).then(
        (messages) => dispatch(receiveMessages(messages))
    )
);

export const createChannelMessage = (message, channelId) => dispatch => (
    APIUtil.createChannelMessage(message, channelId).then(
        (res) => dispatch(createMessage(res.entities)),
        (errors) => dispatch(receiveErrors(errors))
    )
);
