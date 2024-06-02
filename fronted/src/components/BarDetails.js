// src/components/BarDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button, ListGroup, Alert } from 'react-bootstrap';

const BarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bar, setBar] = useState(null);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBar = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bars/${id}`);
        setBar(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders?barId=${id}`);
        setOrders(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBar();
    fetchOrders();
  }, [id]);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      setError(error);
    }
  };

  if (!bar) return <Container>Loading...</Container>;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{bar.name}</Card.Title>
          <Card.Text>
            {bar.description}<br />
            Adresse: {bar.adresse}<br />
            Téléphone: {bar.tel}<br />
            Email: {bar.email}
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Commandes</h2>
      {orders.length === 0 ? (
        <Alert variant="info">Aucune commande pour ce bar.</Alert>
      ) : (
        <ListGroup>
          {orders.map(order => (
            <ListGroup.Item key={order.id}>
              {order.beer.name} - Quantité: {order.quantity}
              <Button variant="danger" size="sm" onClick={() => handleDeleteOrder(order.id)} className="float-end">
                Supprimer
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default BarDetail;
