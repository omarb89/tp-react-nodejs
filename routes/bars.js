// app.js
const express = require('express');
const { sequelize, Bar, Biere, Commande, BiereCommande } = require('./models');

const app = express();
app.use(express.json());

// Endpoints pour Bar
app.get('/bars', async (req, res) => {
  const bars = await Bar.findAll();
  res.json(bars);
});

app.post('/bars', async (req, res) => {
  const bar = await Bar.create(req.body);
  res.json(bar);
});

