const express = require('express');
const { sequelize, Bar, Biere, Commande, BiereCommande } = require('./models');

const app = express();
app.use(express.json());

// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Welcome to the Bar API');
});

// Routes pour Bar
app.get('/bars', async (req, res) => {
  try {
    const bars = await Bar.findAll();
    res.json(bars);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/bars', async (req, res) => {
  try {
    const bar = await Bar.create(req.body);
    res.json(bar);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/bars/:id', async (req, res) => {
  try {
    const bar = await Bar.findByPk(req.params.id, {
      include: [Biere, Commande]
    });
    if (bar) {
      res.json(bar);
    } else {
      res.status(404).send('Bar not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/bars/:id', async (req, res) => {
  try {
    const rowsDeleted = await Bar.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Bar not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Routes pour Biere
app.get('/bieres', async (req, res) => {
  try {
    const bieres = await Biere.findAll();
    res.json(bieres);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/bieres', async (req, res) => {
  try {
    const biere = await Biere.create(req.body);
    res.json(biere);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Routes pour Commande
app.get('/commandes', async (req, res) => {
  try {
    const commandes = await Commande.findAll();
    res.json(commandes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/commandes', async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.json(commande);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/commandes/:commandeId/bieres', async (req, res) => {
  try {
    const { commandeId } = req.params;
    const { biereId } = req.body;
    const biereCommande = await BiereCommande.create({ commandeId, biereId });
    res.json(biereCommande);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
