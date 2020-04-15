import initState from './initState';

const petListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'RECEIVE_PETS':
      return {
        ...state,
        animals: action.animals,
      };
    default:
      return state;
  }
};

export default petListReducer;
