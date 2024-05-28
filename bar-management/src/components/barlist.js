import React, { useEffect, useState } from 'react';
import { getBars } from '../api';
import { Link } from 'react-router-dom';

const BarList = () => {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        getBars().then(response => {
            setBars(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Liste des Bars</h1>
            <Link to="/add-bar">Ajouter un Bar</Link>
            <ul>
                {bars.map(bar => (
                    <li key={bar.id}>
                        <Link to={`/bars/${bar.id}`}>{bar.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BarList;
