import initState from './initState';

const petListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return state;
    default:
      return state;
  }
};

export default petListReducer;
