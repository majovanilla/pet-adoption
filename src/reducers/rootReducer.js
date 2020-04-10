import { combineReducers } from 'redux';
import petListReducer from './petListReducer';

const rootReducer = (combineReducers({
  list: petListReducer,
}));

export default rootReducer;
