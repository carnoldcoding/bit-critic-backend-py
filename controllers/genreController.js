const GenreService = require('../services/genreService');

// handle request to API (Controllers direct incoming requests)
const syncGenres = async (req, res) => {
  try {
    await GenreService.syncGenresWithDatabase();
    res.status(200).send('Genres synced successfully');
  } catch (error) {
    console.error('Error syncing genres:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { syncGenres };