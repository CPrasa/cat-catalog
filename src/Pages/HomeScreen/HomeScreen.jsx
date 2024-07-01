import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchBreeds } from '../../API/api';
import SearchBar from '../../components/Search Bar/SearchBar';
import CatCatalogTable from '../../components/CatCatalogTable/CatCatalogTable';

const CatBreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBreeds = async () => {
      const data = await fetchBreeds();
      setBreeds(data);
      setFilteredBreeds(data);
    };
    loadBreeds();
  }, []);

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
    <div>
      <div>
      <h1 className="title">Cat Catalog</h1>
      </div>
      <div className="container d-flex flex-column align-items-center">
      <SearchBar className="searchbar" filterBreeds={filterBreeds} />
      <CatCatalogTable filteredBreeds={filteredBreeds} handleNavigation={handleNavigation} />
    </div>
    </div>
    
  );
};

export default CatBreedList;
