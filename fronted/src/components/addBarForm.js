import React, { useState } from 'react';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/bars', newBar); // Envoyer la requête POST à http://localhost:5000/bars
      if (response.status === 200) {
        // Mettre à jour l'état parent avec le nouveau bar ajouté
        addBar(response.data);
        // Réinitialiser les champs après l'ajout
        setName('');
        setAdresse('');
        setTel('');
        setEmail('');
        setDescription('');
        // Afficher le message de confirmation
        setMessage('Le bar a été ajouté avec succès !');
        // Effacer le message après quelques secondes
        setTimeout(() => {
          setMessage('');
        }, 3000);
      } else {
        throw new Error('Failed to add bar');
      }
    } catch (error) {
      console.error('Error adding bar:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nom du bar"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Adresse"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
      />
      <input
        type="text"
        placeholder="Téléphone"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={handleAddBar}>Ajouter le bar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBarForm;
