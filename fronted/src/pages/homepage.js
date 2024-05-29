import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarList from '../components/BarList.js';
import BarDetail from '../components/BarDetails.js';
import OrderForm from '../components/orderForm.js';
// import NavBar from '../components/Navbar.js';

const HomePage = () => {
  const [bars, setBars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bars');
        setBars(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      setBars([]);
      setError(null);
    };
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {error && <p>Une erreur s'est produite : {error.message}</p>}
      <BarList />
      
      {/* <OrderForm /> */}
      <h2>Liste des bars :</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {bars.map((bar) => (
            <tr key={bar.id}>
              <td>{bar.name}</td>
              <td>{bar.adresse}</td>
              <td>{bar.tel}</td>
              <td>{bar.email}</td>
              <td>{bar.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
      
    </div>
    
    
  );
};

export default HomePage;
