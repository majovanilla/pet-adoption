export const newSearch = (params) => ({
  type: 'NEW_SEARCH',
  params,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});
