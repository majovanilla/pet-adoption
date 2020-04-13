const initState = 'All Pets';

const filterReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_FILTER') {
    return {
      ...state,
      filter: action.filter,
    };
  }
  return state;
};

export default filterReducer;
