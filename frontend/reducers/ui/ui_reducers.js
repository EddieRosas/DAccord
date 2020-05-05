import { combineReducers } from 'redux';

import modalsReducer from './modals_reducer';


const uiReducers = combineReducers({
   modal: modalsReducer
});

export default uiReducers;