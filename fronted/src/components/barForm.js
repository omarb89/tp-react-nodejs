import React, { useState } from 'react';
import { addBar } from '../api';
import useHistory  from 'react-router-dom';

const BarForm = () => {
    const [name, setName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [tel, setTel] = useState('');
    const [mail, setMail] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBar = { name, adresse, tel, mail, description };
        addBar(newBar).then(() => {
            history.push('/');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nom du Bar :</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Adresse :</label>
            <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                required
            />
            <label>Téléphone :</label>
            <input
                type="text"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
            />
            <label>Email :</label>
            <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
            />
            <label>Description :</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default BarForm;
