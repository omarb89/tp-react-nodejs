// import express from 'express';
// import cors from 'cors';
// import sequelize from './config/database.js';
// import db from './config/database.js';

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// // Routes
// import barRoutes from './routes/bar.routes.js';
// import beerRoutes from './routes/beer.routes.js';
// import orderRoutes from './routes/order.routes.js';
// import beerOrderRoutes from './routes/beer_order.routes.js';

// app.use('/bars', barRoutes);
// app.use('/beers', beerRoutes);
// app.use('/orders', orderRoutes);
// app.use('/beer_orders', beerOrderRoutes);

// // Démarrer le serveur
// app.listen(PORT, async () => {
//   console.log(`Server is running on port ${PORT}`);

//   // Vérifier la connexion à la base de données
//   try {
//     await db.sequelize.authenticate();
//     console.log('Database connection has been established successfully.');

//     // Synchroniser les modèles avec la base de données
//     await db.sequelize.sync();
//     console.log('Models have been synchronized with the database.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// });


import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

// Import models
import './models/bar.model.js';
import './models/beer.model.js';
import './models/beer_order.model.js';
import './models/order.model.js';

// Import routes
import barRouter from './routes/bar.routes.js';
import beerRouter from './routes/beer.routes.js';
import orderRouter from './routes/order.routes.js';
import beerOrderRouter from './routes/beer_order.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/bars', barRouter);
app.use('/beers', beerRouter);
app.use('/orders', orderRouter);
app.use('/beer_orders', beerOrderRouter);

// Sync database and start server
sequelize
  // .sync({ force: true })
  .sync()
  .then(async () => {
    console.log('✅ Database & tables created!')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ API Server is running on port ${PORT}`);
});



