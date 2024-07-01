import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatBreedCard from './Pages/CatBreedDetails/CatBreedDetails';
import CatBreedList from './Pages/HomeScreen/HomeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<CatBreedList />} />
      <Route path="/breedCard/:breedId" element={<CatBreedCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
