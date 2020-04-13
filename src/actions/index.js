export const newSearch = (params) => ({
  type: 'NEW_SEARCH',
  params,
});

export const changeFilter = (staticFilter) => ({
  type: 'CHANGE_FILTER',
  staticFilter,
});

export const changeDinamicFilter = (dinamicFilter) => ({
  type: 'CHANGE_DINAMIC_FILTER',
  dinamicFilter,
});
