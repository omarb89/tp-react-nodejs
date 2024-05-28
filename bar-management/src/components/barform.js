import React, { useState } from 'react';
import { addBar } from '../api';
import { useHistory } from 'react-router-dom';

const BarForm = () => {
    const [name, setName] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addBar({ name }).then(() => {
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
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default BarForm;
