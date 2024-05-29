const express = require('express');
const barSchema = require('./models/bars.js');
const biereSchema = require('./models/Bieres');
const commandeSchema = require('./models/Commandes.js');
const biereCSchema = require('./models/BiereCommandes.js');


const app = express();
app.use(express.json());

// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Welcome to the Bar API');
});

// Routes pour Bar
app.get('/bars', async (req, res) => {
  try {
    const bars = await barSchema.findAll();
    res.json(bars);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/bars', async (req, res) => {
  try {
    const bar = await barSchema.create(req.body);
    res.json(bar);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/bars/:id', async (req, res) => {
  try {
    const bar = await barSchema.findByPk(req.params.id, {
      include: [biereSchema, commandeSchema]
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
    const rowsDeleted = await barSchema.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Bar not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.put('/bars/:id', async (req, res) => {
  try {
      const id = req.params.id;
      console.log(`Received ID: ${id}`); // Log de l'ID reçu

      const bar = await barSchema.findByPk(id);
      if (bar) {
          console.log(`Found bar: ${JSON.stringify(bar)}`); // Log de l'objet trouvé

          await bar.update(req.body);
          const updatedBar = await barSchema.findByPk(id); // Récupérer l'objet mis à jour
          res.json(updatedBar); // Renvoi de l'instance mise à jour
      } else {
          console.log('Product not found'); // Log si l'objet n'est pas trouvé
          res.status(404).json({ error: 'Product not found' });
      }
  } catch (err) {
      console.log(`Error: ${err.message}`); // Log de l'erreur
      res.status(500).json({ error: err.message });
  }
});



// Routes pour Biere
app.get('/bieres', async (req, res) => {
  try {
    const bieres = await biereSchema.findAll();
    res.json(bieres);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/bieres', async (req, res) => {
  try {
    const biere = await biereSchema.create(req.body);
    res.json(biere);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Routes pour Commande
app.get('/commandes', async (req, res) => {
  try {
    const commandes = await commandeSchema.findAll();
    res.json(commandes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/commandes', async (req, res) => {
  try {
    const commande = await commandeSchema.create(req.body);
    res.json(commande);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/commandes/:commandeId/bieres', async (req, res) => {
  try {
    const { commandeId } = req.params;
    const { biereId } = req.body;
    const biereCommande = await biereCSchema.create({ commandeId, biereId });
    res.json(biereCommande);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Routes pour BiereCommande
app.get('/biereCommande', async (req, res) => {
  try {
    const biereCommande = await biereCSchema.findAll();
    res.json(biereCommande);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/biereCommande', async (req, res) => {
  try {
    const biereCommande = await biereCSchema.create(req.body);
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

