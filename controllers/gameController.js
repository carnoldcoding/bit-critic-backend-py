const GameService = require('../services/gameService');

// handle request to API (Controllers direct incoming requests)
const syncGames = async () => {
    await GameService.syncGamesWithDatabase();
};

module.exports = { syncGames };