import React from 'react';

const BarList = ({ bars, selectBar }) => {
  return (
    <div className="bar-list">
      <h2>Bars</h2>
      <ul>
        {bars.map(bar => (
          <li key={bar.id} onClick={() => selectBar(bar)}>
            {bar.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarList;
