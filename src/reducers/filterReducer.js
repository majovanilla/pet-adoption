const initState = 'All Pets';

const filterReducer = (state = initState, action) => {
  if (action === 'CHANGE_FILTER') {
    return {
      ...state,
      filter: action.filter,
    };
  }
  return state;
};

export default filterReducer;
