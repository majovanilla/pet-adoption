import { initPetState } from './initState';

const petListReducer = (state = initPetState, action) => {
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
