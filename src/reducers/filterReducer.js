const initState = "ALL";

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ALL':
      return state;
    case 'CATS':
      return state;
    case 'DOGS':
      return state;
    default:
      return state;
  }
};

export default filterReducer;
