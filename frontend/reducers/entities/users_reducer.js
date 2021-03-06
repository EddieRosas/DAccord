import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USERS, EDIT_USER, RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_DATA, RECEIVE_SERVER } from '../../actions/server_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return action.user;
        case RECEIVE_DATA:
            return action.payload.users;
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.users);
        case EDIT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser })
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}


export default usersReducer;

 