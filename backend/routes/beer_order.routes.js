import express from 'express';
const router = express.Router();
import BeerOrder from '../models/beer_order.model.js';

// Ajouter une bière à une commande
router.post('/orders', async (req, res) => {
  try {
    const { barId, beerId, quantity } = req.body;
    console.log('Received Order:', { barId, beerId, quantity });  // Log de debug

    if (!barId || !beerId || !quantity) {
      throw new Error('Missing required fields');
    }

    const beerOrder = await BeerOrder.create({ barId, beerId, quantity });
    console.log('Order created successfully:', beerOrder);  // Log de succès
    res.json(beerOrder);
  } catch (error) {
    console.error('Error creating order:', error);  // Log d'erreur détaillé
    res.status(500).json({ error: error.message });
  }
});

export default router;
