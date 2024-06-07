const DatabaseService = require('../services/dbService');

// handle request to API (Controllers direct incoming requests)
const syncDatabase = async (req, res) => {
  try {
    await DatabaseService.dbSync();
    res.status(200).send('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
    res.status(500).send('Internal server error');
  }
};

// handle request to API (Controllers direct incoming requests)
const resetDatabase = async (req, res) => {
    try {
      await DatabaseService.dbReset();
      res.status(200).send('Database reset successfully');
    } catch (error) {
      console.error('Error syncing database:', error);
      res.status(500).send('Internal server error');
    }
  };

module.exports = { syncDatabase, resetDatabase };