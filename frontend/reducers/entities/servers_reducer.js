import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    DELETE_SERVER
} from '../../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return {...state, ...action.servers}
        case RECEIVE_SERVER:
            const newServer = { [action.server.id]: action.server };
            return Object.assign({}, state, newServer)
        case DELETE_SERVER:
            const nextState = Object.assign({}, state);
            delete nextState[action.serverId]
            return nextState;
        default:
            return state;
    }
};

export default serversReducer;