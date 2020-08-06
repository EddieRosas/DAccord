import { RECEIVE_CHANNEL, REMOVE_CHANNEL} from '../../actions/channel_actions';
import { RECEIVE_DATA } from "../../actions/server_actions";
import { RECEIVE_SERVER } from "../../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DATA:
            return Object.assign({}, state, action.payload.channels)
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { [action.channel.id]: action.channel });
        case RECEIVE_SERVER:
            return Object.assign({}, state, { [action.payload.channels.id]: action.payload.channels } )
        case REMOVE_CHANNEL:
            const new_channels = Object.assign({}, state);
            delete new_channels[action.channel.id];
            return new_channels;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default channelsReducer;