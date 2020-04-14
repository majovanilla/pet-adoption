export const fetchPetsPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

export const fetchPetsError = (error) => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});

export const receivePets = (json) => ({
  type: 'RECEIVE_PETS',
  pets: json,
});

export const fetchPets = (state) => {
  return fetch(`https://api.petfinder.com/v2/animals/${process.env.REACT_APP_PET_API_KEY}`)
    .then((response) => response.json())
    .then((json) => dispatchEvent(receivePets(state, json)));
};


export const changeFilter = (staticFilter) => ({
  type: 'CHANGE_FILTER',
  staticFilter,
});

export const changeDinamicFilter = (dinamicFilter) => ({
  type: 'CHANGE_DINAMIC_FILTER',
  dinamicFilter,
});
