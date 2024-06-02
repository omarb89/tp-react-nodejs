import express from 'express';
const router = express.Router();
import Bar from '../models/bar.model.js';

router.get('/', async (req, res) => {
  try {
    const bars = await Bar.findAll();
    res.json(bars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const bar = await Bar.create(req.body);
    res.json(bar);
  } catch (error) {
    console.log("test");
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Bar.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Bar.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bar = await Bar.findByPk(req.params.id);
    res.json(bar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
