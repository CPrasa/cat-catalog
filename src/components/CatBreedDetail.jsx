import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyBreeds = [
  { id: 'abys', name: 'Abyssinian' },
  { id: 'aege', name: 'Aegean' },
  { id: 'abob', name: 'American Bobtail' },
  { id: 'acur', name: 'American Curl' },
  { id: 'asho', name: 'American Shorthair' },
  { id: 'awir', name: 'American Wirehair' },
];

const CatBreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBreeds(dummyBreeds);
  }, []);

  const handleNavigation = (breedId) => {
    navigate(`/breedCard`);
  };

  return (
    <div>
      
      <h1 className="title"></h1>
      <div className="table-container">
        <table className="table table-striped table-custom">
          <thead>
            <tr className='text'>
              <h1>Cat catalog</h1>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {breeds.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <span
                    className="arrow"
                    onClick={() => handleNavigation(breed.id)}
                  >
                    &gt;
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatBreedList;
