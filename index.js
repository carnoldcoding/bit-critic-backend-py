const express = require('express');
const genreController = require('./controllers/genreController');
const gameController = require('./controllers/gameController');
const dbController = require('./controllers/dbController');

const app = express();
const PORT = 3000;

// Routes

//Sequelize Model Syncs
app.get('/sync-genres', genreController.syncGenres);
app.get('/sync-games', gameController.syncGames);

//Database Debugging
app.get('/sync-db', dbController.syncDatabase);
app.get('/reset-db', dbController.resetDatabase);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});