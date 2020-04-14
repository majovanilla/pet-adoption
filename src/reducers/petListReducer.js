import initState from './initState';

const petListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_PETS':
      return {
        ...state,
        pets: action.json,
      };
    default:
      return state;
  }
};

export default petListReducer;
