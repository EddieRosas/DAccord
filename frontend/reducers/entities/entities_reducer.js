import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    servers: serversReducer,
    channels: channelsReducer
});

export default entitiesReducers;