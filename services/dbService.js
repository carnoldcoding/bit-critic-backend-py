const { Sequelize } = require('sequelize');
const { dbClient } = require('../config.js');
const GenreModel = require("../models/genre");
const GameModel = require('../models/game');

// Initialize Sequelize
const sequelize = new Sequelize(
    dbClient.database,
    dbClient.user,
    dbClient.password, {
    host: dbClient.host,
    dialect: dbClient.client
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const dropTables = async (tableArray) => {
    try {
        for (const table of tableArray){
            await table.drop();
            console.log(`${table} table has been dropped successfully.`);
        }
    } catch (error) {
        console.error('Error dropping genre table:', error);
    }
}

const dbSync = async () => {
    await sequelize.sync();
}

// Define models
const Genre = GenreModel(sequelize);
const Game = GameModel(sequelize);

dbSync();

module.exports = {
    Genre,
    Game
};
