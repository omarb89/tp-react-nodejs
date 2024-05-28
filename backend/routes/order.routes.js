import express from 'express';
const router = express.Router();
import Order from '../models/order.model.js';

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Order.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Order.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
