const ArtworkService = require('../services/artworkService');

// handle request to API (Controllers direct incoming requests)
const syncArtwork = async () => {
    await ArtworkService.syncArtworkWithDatabase();
};

module.exports = { syncArtwork };