import { combineReducers } from 'redux';
import petListReducer from './petListReducer';
import filterReducer from './filterReducer';

const rootReducer = (combineReducers({
  pets: petListReducer,
  filter: filterReducer,
}));

export default rootReducer;
