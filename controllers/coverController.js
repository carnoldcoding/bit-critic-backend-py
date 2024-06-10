const CoverService = require('../services/coverService');

// handle request to API (Controllers direct incoming requests)
const syncCover = async () => {
    await CoverService.syncCoverWithDatabase();
};

module.exports = { syncCover };