import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Alert, Button, Form } from 'react-bootstrap';

const BeerDetail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);
  const [bars, setBars] = useState([]);
  const [selectedBarId, setSelectedBarId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [cartError, setCartError] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/beers/${id}`);
        setBeer(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchBars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bars');
        setBars(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBeer();
    fetchBars();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      console.log('Bar ID:', selectedBarId, 'Beer ID:', id, 'Quantity:', quantity);
      await axios.post(`http://localhost:5000/orders`, { barId: selectedBarId, beerId: id, quantity });
      setCartSuccess('La bière a été ajoutée au panier avec succès.');
      setCartError(null);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setCartError('Une erreur s\'est produite lors de l\'ajout au panier.');
      setCartSuccess(null);
    }
  };

  if (error) {
    return <Alert variant="danger">Une erreur s'est produite : {error.message}</Alert>;
  }

  if (!beer || bars.length === 0) {
    return <Container>Chargement...</Container>;
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Text>
            Degrée d'alcool: {beer.degree} %<br />
            Description: {beer.description}<br />
            Prix: {beer.prix} €
          </Card.Text>
          <Form.Group controlId="barSelect">
            <Form.Label>Choisir un bar :</Form.Label>
            <Form.Control as="select" value={selectedBarId} onChange={(e) => setSelectedBarId(e.target.value)}>
              <option value="">Sélectionner un bar</option>
              {bars.map(bar => (
                <option key={bar.id} value={bar.id}>{bar.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantité :</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddToCart}>Ajouter au panier</Button>
        </Card.Body>
      </Card>
      {cartError && <Alert variant="danger">{cartError}</Alert>}
      {cartSuccess && <Alert variant="success">{cartSuccess}</Alert>}
    </Container>
  );
};

export default BeerDetail;
