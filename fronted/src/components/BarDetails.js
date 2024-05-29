import React from 'react';

const BarDetail = ({ bar, deleteBar }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/api/bars/${bar.id}`, { method: 'DELETE' })
      .then(() => deleteBar(bar.id));
  };

  return (
    <div className="bar-detail">
      <h2>{bar.name}</h2>
      <p>{bar.description}</p>
      <button onClick={handleDelete}>Delete Bar</button>
    </div>
  );
};

export default BarDetail;
