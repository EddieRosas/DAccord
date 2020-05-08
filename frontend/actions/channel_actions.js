import * as APIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveChannel = ({ channel }) => ({
    type: RECEIVE_CHANNEL,
    channel,

});

export const removeChannel = ({ channel }) => ({
    type: REMOVE_CHANNEL,
    channel
});

export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const fetchChannel = (channelId) => dispatch => (
    APIUtil.fetchChannel(channelId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const fetchChannels = (serverId) => dispatch => (
    APIUtil.fetchChannels(serverId).then(
        () => dispatch(receiveChannels()),
        (error) => dispatch(receiveErrors(error))
    )
);

export const createChannel = (channel, serverId) => dispatch => (
    APIUtil.createChannel(channel, serverId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);

export const deleteChannel = (channelId) => dispatch => (
    APIUtil.deleteChannel(channelId).then(
        (channel) => dispatch(removeChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )

);

export const updateChannel = (channel, channelId) => dispatch => (
    APIUtil.updateChannel(channel, channelId).then(
        (channel) => dispatch(receiveChannel(channel)),
        (error) => dispatch(receiveErrors(error))
    )
);