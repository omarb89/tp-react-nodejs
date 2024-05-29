import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import BarForm from './components/barForm.js';
import BarDetail from './components/BarDetails.js';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-bar" element={<BarForm />} />
      <Route path="/bars/:id" element={<BarDetail />} />
    </Routes>
  </Router>
);

export default App;
