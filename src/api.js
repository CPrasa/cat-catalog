// src/api.js

export const fetchBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=12', {
    headers: {
      'x-api-key': 'live_CDYkrDDIoW5dJbD0AD3g5JNl33I0xRlrOAG3lIPXWf1HCLi0aDb23N63dRqROOdT',
    },
  });
  return response.json();
};
