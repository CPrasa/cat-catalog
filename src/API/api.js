const API_KEY = 'live_CDYkrDDIoW5dJbD0AD3g5JNl33I0xRlrOAG3lIPXWf1HCLi0aDb23N63dRqROOdT';

export const fetchBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds?', {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  return response.json();
};

export const fetchBreedById = async (id) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  return response.json();
};
