import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../components/CatBreedCard/CatBreedCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CatBreedDetails.css'
import { fetchBreedById } from '../../API/api';
import CatBreedCard from '../../components/CatBreedCard/CatBreedCard';

const CatBreedDetails = () => {
  const { breedId } = useParams();
  const navigate = useNavigate();
  const [breedData, setBreedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBreedData = async () => {
      const data = await fetchBreedById(breedId);
      if (data && data.length > 0) {
        setBreedData(data[0]);
      }
      setLoading(false);
    };
    loadBreedData();
  }, [breedId]);

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div>
        <h1 className="title">Cat   Breed   Details</h1>
        <div className="d-flex justify-content-center align-items-center min-vh-90">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      </div>
      
    );
  }


  return (
    <div className="text-center">
      <h1 className="title">Cat Breed Details</h1>
    <div className="d-flex justify-content-center align-items-center">
      <CatBreedCard breedData={breedData} goBack={goBack} />
    </div>
    </div>
    
  );
};

export default CatBreedDetails;
