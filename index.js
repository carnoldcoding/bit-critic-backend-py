const express = require('express');
const genreController = require('./controllers/genreController');
const gameController = require('./controllers/gameController');
const dbController = require('./controllers/dbController');
const artworkController = require('./controllers/artworkController');
const coverController = require('./controllers/coverController');
const franchiseController = require('./controllers/franchiseController');
const artwork = require('./models/artwork');

const app = express();
const PORT = 3000;

// Routes

//Sequelize Model Syncs
app.get('/sync-genres', genreController.syncGenres);
app.get('/sync-games', gameController.syncGames);
app.get('/sync-artwork', artworkController.syncArtwork);
app.get('/sync-covers', coverController.syncCover);
app.get('/sync-franchises', franchiseController.syncFranchises);

//Database Debugging
app.get('/sync-db', dbController.syncDatabase);
app.get('/reset-db', dbController.resetDatabase);
app.get('/sync-all', async (req, res) => {
  try {
    await genreController.syncGenres(req, res);
    await gameController.syncGames(req, res);
    await artworkController.syncArtwork(req, res);
    await coverController.syncCover(req, res);
    await franchiseController.syncFranchises(req, res);
    res.status(200).send('All data synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing all data:', error);
    res.status(500).send('Error synchronizing all data');
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});