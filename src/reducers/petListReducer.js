const initState = [
  {
    id: 0,
    title: 'Fluffy and friendly',
    name: 'Miguel Angel',
    type: 'cat',
    age: 'Young',
    size: 'small',
  },
  {
    id: 1,
    title: 'Playful and friendly',
    name: 'Leonardo',
    type: 'dog',
    age: 'Young',
    size: 'Large',
  },
  {
    id: 2,
    title: 'Quiet and babysitter',
    name: 'Donatello',
    type: 'dog',
    age: 'Old',
    size: 'small',
  },
];

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
