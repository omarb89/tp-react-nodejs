// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <h5>My Bar App</h5>
            <p>&copy; 2024 My Bar App. Tous droits réservés.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-end">
              <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
              <Nav.Link href="/privacy" className="text-white">Politique de Confidentialité</Nav.Link>
              <Nav.Link href="/terms" className="text-white">Conditions d'Utilisation</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
