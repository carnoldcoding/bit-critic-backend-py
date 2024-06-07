const CoverService = require('../services/coverService');

// handle request to API (Controllers direct incoming requests)
const syncCover = async (req, res) => {
  try {
    await CoverService.syncCoverWithDatabase();
    res.status(200).send('Cover synced successfully');
  } catch (error) {
    console.error('Error syncing genres:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { syncCover };