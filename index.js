const express = require('express');

const genreController = require('./controllers/genreController');
const gameController = require('./controllers/gameController');
const dbController = require('./controllers/dbController');
const artworkController = require('./controllers/artworkController');
const coverController = require('./controllers/coverController');
const franchiseController = require('./controllers/franchiseController');
const gameToCompanyController = require('./controllers/gameToCompanyController');
const companyController = require('./controllers/companyController');

const app = express();
const PORT = 3000;

// Routes

//Sequelize Model Syncs
app.get('/sync-genres', async (req, res) => {
  try {
    await genreController.syncGenres();
    res.status(200).send("Genres synced successfully to database");
  } catch (error) {
    res.status(500).send("Genres failed to sync to database");
}});

app.get('/sync-games', async (req, res) => {
try {
  await gameController.syncGames();
  res.status(200).send("Games successfully synced to database");
} catch (error) {
  res.status(500).send("Games failed to sync to database");
}
});
app.get('/sync-artwork', async (req, res) => {
  try {
    await artworkController.syncArtwork();
    res.status(200).send("Artwork successfully synced to database");
  } catch (error) {
    res.status(500).send("Artowrk failed to sync to database");
  }
});
app.get('/sync-covers', async () => {
  try {
    await coverController.syncCover();
    res.status(200).send("Covers successfully synced to database");
  } catch (error) {
    res.status(500).send("Covers failed to sync to database");
  }

});
app.get('/sync-franchises', async () => {
  try {
    await franchiseController.syncFranchises();
    res.status(200).send("Franchises successfully synced to database");
  } catch (error) {
    res.status(500).send("Franches failed to sync to database");
  }
});

app.get('/sync-game-to-company', async (req, res) => {
  try {
    await gameToCompanyController.syncGameToCompany();
    res.status(200).send("Game To Company table successfully synced to database");
  } catch (error) {
    res.status(500).send("Game To Company table failed to sync to database");
  }
})

app.get('/sync-companies', async (req, res) => {
  try {
    await companyController.syncCompanies();
    res.status(200).send("Company table successfully synced to database");
  } catch (error) {
    console.log(error);
    res.status(500).send("Company table failed to sync to database");
  }
})

//Database Debugging
app.get('/sync-db', dbController.syncDatabase);
app.get('/reset-db', dbController.resetDatabase);
app.get('/sync-all', async (req, res) => {
  try {
    await genreController.syncGenres();
    await gameController.syncGames();
    await artworkController.syncArtwork();
    await coverController.syncCover();
    await franchiseController.syncFranchises();
    await companyController.syncCompanies();
    await gameToCompanyController.syncGameToCompany();
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