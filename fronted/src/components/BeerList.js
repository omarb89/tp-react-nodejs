import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBeers, deleteBeer } from '../service/beerService';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers().then(response => setBeers(response.data));
  }, []);

  const handleDelete = (beerId) => {
    deleteBeer(beerId).then(() => {
      setBeers(beers.filter(beer => beer.id !== beerId));
    });
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Bières</h1>
          <Button variant="primary" as={Link} to="/add-beer">Ajouter une bière</Button>
        </Col>
      </Row>
      <Row>
        {beers.map(beer => (
          <Col key={beer.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{beer.type} - {beer.alcohol}%</Card.Subtitle>
                <Card.Text>{beer.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" as={Link} to={`/beers/${beer.id}`}>Détails</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(beer.id)}>Supprimer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BeerList;
