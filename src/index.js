import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this line is included

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatBreedCard from './components/CatBreedCard';
import CatBreedList from './components/CatBreedDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path="/breedCard" element={<CatBreedCard />} />
        <Route path="/" element={<CatBreedList/>}> </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
