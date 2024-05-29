import React, { useState, useEffect } from 'react';
import BarList from './components/BarList.js';
import AddBarForm from './components/AddOrderForm.js';
import BarDetail from './components/BarDetails.js';
import AddOrderForm from './components/AddOrderForm.js';

const App = () => {
  const [bars, setBars] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/bars')
      .then(response => response.json())
      .then(data => setBars(data));
  }, []);

  const addBar = (newBar) => {
    setBars([...bars, newBar]);
  };

  const deleteBar = (barId) => {
    setBars(bars.filter(bar => bar.id !== barId));
    setSelectedBar(null);
  };

  const selectBar = (bar) => {
    setSelectedBar(bar);
  };

  return (
    <div className="app">
      <h1>Bar Management</h1>
      <AddBarForm addBar={addBar} />
      <BarList bars={bars} selectBar={selectBar} />
      {selectedBar && <BarDetail bar={selectedBar} deleteBar={deleteBar} />}
      <AddOrderForm />
    </div>
  );
};

export default App;
