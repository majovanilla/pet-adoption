const initState = {
  staticFilter: 'All',
  dinamicFilter: '',
};

const filterReducer = (state = initState, action) => {
  if (action.type === 'CHANGE_FILTER') {
    return {
      ...state,
      staticFilter: action.staticFilter,
    };
  }
  if (action.type === 'CHANGE_DINAMIC_FILTER') {
    return {
      ...state,
      dinamicFilter: action.dinamicFilter,
    };
  }
  return state;
};

export default filterReducer;
