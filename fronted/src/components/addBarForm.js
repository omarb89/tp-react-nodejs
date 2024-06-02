import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const AddBarForm = ({ addBar }) => {
  const [name, setName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBar = async () => {
    const newBar = { name, adresse, tel, email, description };
    try {
      const response = await axios.post('http://localhost:5000/bars', newBar);
      if (response.status === 200) {
        addBar(response.data);
        setName('');
        setAdresse('');
        setTel('');
        setEmail('');
        setDescription('');
        setMessage('Le bar a été ajouté avec succès !');
        setTimeout(() => {
          setMessage('');
        }, 3000);
      } else {
        throw new Error('Failed to add bar');
      }
    } catch (error) {
      console.error('Error adding bar:', error);
      setMessage('Une erreur est survenue lors de l\'ajout du bar.');
    }
  };

  return (
    <Container>
      <h2>Ajouter un Nouveau Bar</h2>
      <Form>
        <Form.Group controlId="formBarName">
          <Form.Label>Nom du bar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom du bar"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBarAdresse">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBarTel">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBarEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBarDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddBar}>Ajouter le bar</Button>
      </Form>
      {message && <Alert variant={message.includes('succès') ? 'success' : 'danger'} className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default AddBarForm;
