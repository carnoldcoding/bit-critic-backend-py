const FranchiseService = require('../services/franchiseService');

// handle request to API (Controllers direct incoming requests)
const syncFranchises = async () => {
  await FranchiseService.syncFranchisesWithDatabase();
};

module.exports = { syncFranchises };