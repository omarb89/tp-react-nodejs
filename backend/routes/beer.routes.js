import express from 'express';
const router = express.Router();
import  Beer from '../models/beer.model.js';

router.get('/', async (req, res) => {
  try {
    const beers = await Beer.findAll();
    res.json(beers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const beer = await Beer.create(req.body);
    res.json(beer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Beer.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Beer.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    if (!beer) {
      res.status(404).json({ message: 'Beer not found' });
    } else {
      res.json(beer);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
