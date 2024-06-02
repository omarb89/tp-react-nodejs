import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createBar } from '../service/barService.js';

const BarForm = () => {
  const [name, setName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bar = { name, adresse, tel, email, description };
    createBar(bar).then(() => navigate('/'));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>Add New Bar</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formAdresse">
              <Form.Label>Adresse:</Form.Label>
              <Form.Control type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formTel">
              <Form.Label>Tel:</Form.Label>
              <Form.Control type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">Add Bar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BarForm;
