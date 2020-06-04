import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    DELETE_SERVER,
    RECEIVE_DATA
} from '../../actions/server_actions';

import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return Object.assign({}, state, action.servers);
        case RECEIVE_DATA: 
            return action.payload.servers;
        case RECEIVE_SERVER:
            return action.payload.server;
        case DELETE_SERVER:
            const nextState = Object.assign({}, state);
            delete nextState[action.serverId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default serversReducer;