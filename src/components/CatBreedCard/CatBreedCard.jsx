import React from 'react';
import './CatBreedCard.css'

const CatBreedCard = ({ breedData, goBack }) => {
  if (!breedData || !breedData.breeds) {
    return <div>No data available</div>;
  }

  const { breeds, url } = breedData;
  const { name, origin, life_span, description } = breeds[0];

  return (
    <div className="card custom-card">
      <div className="card-header d-flex justify-content-between align-items-center custom-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
          onClick={goBack}
          style={{ cursor: 'pointer' }}
        >
          <path
            fillRule="evenodd"
            d="M6.354 11.354a.5.5 0 0 1 0-.708L2.707 8l3.647-3.646a.5.5 0 0 1 .708.708L4.707 7.5H11.5a.5.5 0 0 1 0 1H4.707l2.354 2.354a.5.5 0 0 1-.708.708z"
          />
        </svg>
        <h2 className="card-title text-center mb-0">{name}</h2>
      </div>
      <div className="image-container">
        <img className="card-img-top custom-img" src={url} alt={name} />
      </div>
      <div className="card-body custom-body">
        <p className="card-text">
          <strong>Origin:</strong> {origin}
          <br/><br/>
          <strong>Life Span:</strong> {life_span} years
          <br/><br/>
          <strong>Description:</strong>
          <br/>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CatBreedCard;
