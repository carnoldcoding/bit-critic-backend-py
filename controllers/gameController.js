const GameService = require('../services/gameService');

// handle request to API (Controllers direct incoming requests)
const syncGames = async (req, res) => {
  try {
    await GameService.syncGamesWithDatabase();
    res.status(200).send('Games synced successfully');
  } catch (error) {
    console.error('Error syncing games:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = { syncGames };