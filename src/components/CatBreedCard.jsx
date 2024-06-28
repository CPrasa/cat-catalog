import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../Assets/a1.png';
import './CatBreedCard.css'; // Import CSS file

function CatBreedCard() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card custom-card">
        <div className="card-header d-flex justify-content-between align-items-center custom-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" onClick={goBack} style={{ cursor: 'pointer' }}>
            <path fillRule="evenodd" d="M6.354 11.354a.5.5 0 0 1 0-.708L2.707 8l3.647-3.646a.5.5 0 0 1 .708.708L4.707 7.5H11.5a.5.5 0 0 1 0 1H4.707l2.354 2.354a.5.5 0 0 1-.708.708z"/>
          </svg>
          <h5 className="card-title text-center mb-0">Title</h5> {/* Centered title */}
          <div></div> {/* Placeholder for right side content */}
        </div>
        <img className="card-img-top" src={img1} alt="Cat breed" />
        <div className="card-body custom-body">
          <p className="card-text">
            Origin: Egypt<br/><br/>
            Life Span: 14-15<br/><br/>
            Description:<br/>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CatBreedCard;
