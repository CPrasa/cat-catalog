import React, { useState } from 'react';
import './CatCatalogTable.css'; 
const CatCatalogTable = ({ filteredBreeds, handleNavigation }) => {
  const [focusedCell, setFocusedCell] = useState(null);

  const handleFocus = (breedId) => {
    setFocusedCell(breedId);
    handleNavigation(breedId);
  };

  return (
    <div className="table-container">
      <table className="table table-striped table-custom">
        <thead class="thead-dark">
          <tr className="text">
            <th className="table-header-cell "></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredBreeds.map((breed) => (
            <tr key={breed.id}>
              <td className={`table-cell ${focusedCell === breed.id ? 'focused' : ''}`}>{breed.name}</td>
              <td>
                <span
                  className="arrow"
                  onClick={() => handleFocus(breed.id)}
                >
                  &gt;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatCatalogTable;
