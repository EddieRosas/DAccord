import {
  CREATE_MESSAGE,
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE
} from "../../actions/message_actions";
import { RECEIVE_SERVER } from "../../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_MESSAGE:
      return Object.assign(nextState, action.payload.messages);
    case RECEIVE_MESSAGE:
      return { ...state, ...action.message };
    case RECEIVE_SERVER:
      return Object.assign(nextState, action.payload.messages);
    case RECEIVE_MESSAGES:
        return Object.assign(nextState, action.messages);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
