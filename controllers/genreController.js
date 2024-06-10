const GenreService = require('../services/genreService');

// handle request to API (Controllers direct incoming requests)
const syncGenres = async () => {
    await GenreService.syncGenresWithDatabase();
};

module.exports = { syncGenres };