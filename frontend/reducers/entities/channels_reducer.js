import { RECEIVE_CHANNEL, REMOVE_CHANNEL, RECEIVE_CHANNELS } from '../../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel })
        case RECEIVE_CHANNELS:
            return action.channels
        case REMOVE_CHANNEL:
            const new_channels = Object.assign({}, state);
            delete new_channels[action.channel.id]
            return new_channels;
        default:
            return state;
    }
}

export default channelsReducer;