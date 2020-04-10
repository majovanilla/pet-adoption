const initState = [];

const petListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return state;
    case 'NEW_SEARCH':
      return state;
    default:
      return state;
  }
};

export default petListReducer;
