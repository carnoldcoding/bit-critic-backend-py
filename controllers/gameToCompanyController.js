const GameToCompany = require('../services/gameToCompanyService');

// handle request to API (Controllers direct incoming requests)
const syncGameToCompany = async () => {
    await GameToCompany.syncGameToCompanyWithDatabase();
};

module.exports = { syncGameToCompany };