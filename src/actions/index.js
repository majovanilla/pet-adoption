// export const fetchPetsPending = () => ({
//   type: 'FETCH_PRODUCTS_PENDING',
// });

// export const fetchPetsError = (error) => ({
//   type: 'FETCH_PRODUCTS_ERROR',
//   error,
// });

export const receivePets = (json) => ({
  type: 'RECEIVE_PETS',
  animals: json.animals,
});

export const changeFilter = (staticFilter) => ({
  type: 'CHANGE_FILTER',
  staticFilter,
});

export const changeDinamicFilter = (dinamicFilter) => ({
  type: 'CHANGE_DINAMIC_FILTER',
  dinamicFilter,
});
