import { combineReducers } from 'redux';
import petListReducer from './petListReducer';
import filterReducer from './filterReducer';

const rootReducer = (combineReducers({
  animals: petListReducer,
  filter: filterReducer,
}));

export default rootReducer;
