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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBreeds = async () => {
      const data = await fetchBreeds();
      setBreeds(data);
      setFilteredBreeds(data);
      setLoading(false)
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

  if(loading){
    return(
      <div>
        <div>
        <h1 className="title">Cat  Catalog</h1>
      </div>
      <SearchBar className="searchbar" filterBreeds={filterBreeds} />
      <div className="d-flex justify-content-center align-items-center min-vh-90">
      <div className="spinner-border text-primary" role="status"></div>
      <span className="visually-hidden">Loading...</span>
      </div>
      </div>
      

    )
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
