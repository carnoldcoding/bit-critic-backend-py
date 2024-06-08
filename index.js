const express = require('express');
const genreController = require('./controllers/genreController');
const gameController = require('./controllers/gameController');
const dbController = require('./controllers/dbController');
const artworkController = require('./controllers/artworkController');
const coverController = require('./controllers/coverController');

const app = express();
const PORT = 3000;

// Routes

//Sequelize Model Syncs
app.get('/sync-genres', genreController.syncGenres);
app.get('/sync-games', gameController.syncGames);
app.get('/sync-artwork', artworkController.syncArtwork);
app.get('/sync-covers', coverController.syncCover);

//Database Debugging
app.get('/sync-db', dbController.syncDatabase);
app.get('/reset-db', dbController.resetDatabase);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});