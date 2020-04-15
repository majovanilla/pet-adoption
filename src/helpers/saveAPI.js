const saveAPI = (token) => {
  const NOW = Math.round((new Date()).getTime() / 1000);
  let cachedAnimals = JSON.parse(localStorage.getItem('animalsCall'));
  if (cachedAnimals && cachedAnimals.savedAt > 86400) {
    return Promise.resolve(cachedAnimals);
  }

  localStorage.removeItem('animalsCall');

  const cors = 'https://cors-anywhere.herokuapp.com/';
  return fetch(`${cors}https://api.petfinder.com/v2/animals/?limit=100`,
    {
      mode: 'cors',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      cachedAnimals = {
        animals: json.animals,
        savedAt: NOW,
      };
      localStorage.setItem('animalsCall', JSON.stringify(cachedAnimals));
      return json;
    });
};

export default saveAPI;
