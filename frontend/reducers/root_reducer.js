import { combineReducers } from 'redux';

import sessionReducer from './session/session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errors_reducer';
import uiReducers from './ui/ui_reducers';


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducers
})

export default rootReducer;
