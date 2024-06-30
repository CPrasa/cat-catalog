// src/CatBreedList.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import your custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { fetchBreeds } from '../api';

const CatBreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadBreeds = async () => {
      const data = await fetchBreeds();
      setBreeds(data);
      setFilteredBreeds(data); // Initialize filteredBreeds with all breeds
    };
    loadBreeds();
  }, []);

  // Function to handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterBreeds(event.target.value);
  };

  // Function to filter breeds based on search term
  const filterBreeds = (term) => {
    const filtered = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBreeds(filtered);
  };

  const handleNavigation = (breedId) => {
    navigate(`/breedCard/${breedId}`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ maxWidth: '1000px', minHeight: '50vh' }}>
      <div className="text-center">
        <h1 className="title"></h1>

        {/* Search bar */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by breed name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="table-container">
          <table className="table table-striped table-custom">
            <thead>
              <tr className="text">
                <h1>Cat catalog</h1>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredBreeds.map((breed) => (
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
    </div>
  );
};

export default CatBreedList;
