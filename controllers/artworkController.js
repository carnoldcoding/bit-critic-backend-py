const ArtworkService = require('../services/artworkService');

// handle request to API (Controllers direct incoming requests)
const syncArtwork = async (req, res) => {
  try {
    await ArtworkService.syncArtworkWithDatabase();
    res.status(200).send('Artwork synced successfully');
  } catch (error) {
    console.error('Error syncing genres:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { syncArtwork };