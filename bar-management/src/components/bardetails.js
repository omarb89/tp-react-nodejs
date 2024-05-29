import React, { useEffect, useState } from 'react';
import { getBarDetails, deleteBar, getOrders, cancelOrder } from '../api';
import { useParams, useHistory } from 'react-router-dom';

const BarDetails = () => {
    const { id } = useParams();
    const [bar, setBar] = useState({});
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getBarDetails(id).then(response => {
            setBar(response.data);
        });
        getOrders().then(response => {
            setOrders(response.data.filter(order => order.barId === id));
        });
    }, [id]);

    const handleDelete = () => {
        deleteBar(id).then(() => {
            history.push('/');
        });
    };

    const handleCancelOrder = (orderId) => {
        cancelOrder(orderId).then(() => {
            setOrders(orders.filter(order => order.id !== orderId));
        });
    };

    return (
        <div>
            <h1>{bar.name}</h1>
            <button onClick={handleDelete}>Supprimer le Bar</button>
            <h2>Commandes</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.beerName} - {order.date}
                        <button onClick={() => handleCancelOrder(order.id)}>Annuler</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BarDetails;
