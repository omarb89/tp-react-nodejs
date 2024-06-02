import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBars, deleteBar } from '../service/barService';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const BarList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    getBars().then(response => setBars(response.data));
  }, []);

  const handleDelete = (barId) => {
    deleteBar(barId).then(() => {
      setBars(bars.filter(bar => bar.id !== barId));
    });
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Bars</h1>
          <Button variant="primary" as={Link} to="/add-bar">Ajouter un bar</Button>
        </Col>
      </Row>
      <Row>
        {bars.map(bar => (
          <Col key={bar.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{bar.name}</Card.Title>
                <Card.Text>
                  {bar.description}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button variant="primary" as={Link} to={`/bars/${bar.id}`}>Détails</Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(bar.id)}>Supprimer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BarList;
