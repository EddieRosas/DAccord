import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}



export default usersReducer;

 