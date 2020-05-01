import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    servers: serversReducer
});

export default entitiesReducers;