const FranchiseService = require('../services/franchiseService');

// handle request to API (Controllers direct incoming requests)
const syncFranchises = async (req, res) => {
  try {
    await FranchiseService.syncFranchisesWithDatabase();
    res.status(200).send('franchises synced successfully');
  } catch (error) {
    console.error('Error syncing franchises:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { syncFranchises };