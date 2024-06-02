import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Alert } from 'react-bootstrap';
import BarList from '../components/BarList.js';
import BeerList from '../components/BeerList.js';
import BeerForm from '../components/BeerForm.js';
// import BarDetail from '../components/BarDetails.js';
// import OrderForm from '../components/orderform.js';
// import NavBar from '../components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [bars, setBars] = useState([]);
  const [beers, setBeers] = useState([]);
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
    <Container>
      {/* <h1 className="my-4">Home Page</h1> */}
      {error && <Alert variant="danger">Une erreur s'est produite : {error.message}</Alert>}
      <BarList />
      <BeerList />
      
      {/* <OrderForm /> */}
      {/* <h2 className="my-4">Liste des bars :</h2> */}
      <Table striped bordered hover>
        {/* <thead>
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
        </thead> */}
        {/* <tbody>
          {bars.map((bar) => (
            <tr key={bar.id}>
              <td>{bar.name}</td>
              <td>{bar.adresse}</td>
              <td>{bar.tel}</td>
              <td>{bar.email}</td>
              <td>{bar.description}</td>
            </tr>
          ))}
        </tbody> */}
      </Table>
    </Container>
  );
};

export default HomePage;
