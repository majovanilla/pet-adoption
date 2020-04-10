const initState = [
  {
    id: 0,
    title: 'Fluffy and friendly',
    name: 'Miguel Angel',
    type: 'cat',
    age: 'Young',
    size: 'small',
  },
];

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return state;
    case 'NEW_SEARCH':
      return state;
    default:
      return state;
  }
};

export default listReducer;
