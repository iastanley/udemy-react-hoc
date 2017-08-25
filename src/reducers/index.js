import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';

const rootReducer = combineReducers({
  authenticated: authenticateReducer
});

export default rootReducer;
