import express from 'express';
const router = express.Router();
import BeerOrder from '../models/beer_order.model.js';

// Ajouter une bière à une commande
router.post('/orders/:orderId/beers/:beerId', async (req, res) => {
  try {
    const { orderId, beerId } = req.params;
    const beerOrder = await BeerOrder.create({ orderId, beerId });
    res.json(beerOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer une bière d'une commande
router.delete('/orders/:orderId/beers/:beerId', async (req, res) => {
  try {
    const { orderId, beerId } = req.params;
    await BeerOrder.destroy({
      where: { orderId, beerId }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
