const express = require('express');
const genreController = require('./controllers/genreController');
const gameController = require('./controllers/gameController');

const app = express();
const PORT = 3000;

// Routes
app.get('/sync-genres', genreController.syncGenres);
app.get('/sync-games', gameController.syncGames);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});