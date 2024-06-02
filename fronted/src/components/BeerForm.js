import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createBeer } from '../service/beerService.js';

const BeerForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [degree, setDegree] = useState('');
  const [prix, setPrix] = useState('');
  const [barId, setBarId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const beer = { name, description, degree, prix, barId };
    createBeer(beer).then(() => navigate('/'));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Ajouter une Nouvelle Bière</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nom:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            
            <Form.Group controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDegree">
              <Form.Label>Degré d'alcool (%):</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrix">
              <Form.Label>Prix (€):</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBarId">
              <Form.Label>ID du Bar:</Form.Label>
              <Form.Control
                type="number"
                value={barId}
                onChange={(e) => setBarId(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">Ajouter</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BeerForm;
