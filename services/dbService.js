const { Sequelize } = require('sequelize');
const { dbClient } = require('../config.js');
const GenreModel = require("../models/genre");
const GameModel = require('../models/game');
const ArtworkModel = require('../models/artwork.js');
const CoverModel = require('../models/cover.js');

// Initialize Sequelize
const sequelize = new Sequelize(
    dbClient.database,
    dbClient.user,
    dbClient.password, {
    host: dbClient.host,
    dialect: dbClient.client,
    define: {
        freezeTableName: true
    }
    },
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const dropTables = async (...tableArray) => {
    try {
        for (const table of tableArray){
            await table.drop();
            console.log(`${table} table has been dropped successfully.`);
        }
    } catch (error) {
        console.error('Error dropping genre table:', error);
    }
}

const dbReset = async () => {
    try {
        await sequelize.drop();
        console.log("Database Destroyed");
    } catch (error) {
        console.log("Database destruction failed\n", error)
    }
}

const dbSync = async () => {
    try {
        await sequelize.sync();
        console.log("Database synced properly");
    } catch (error) {
        console.error("Synchronization error: ", error);
    }
}

// Define models
const Genre = GenreModel(sequelize);
const Game = GameModel(sequelize);
const Artwork = ArtworkModel(sequelize);
const Cover = CoverModel(sequelize);

//Define associations
Game.belongsToMany(Genre, { through: 'game_to_genre', foreignKey: 'gameId', onDelete: 'cascade' });
Genre.belongsToMany(Game, { through: 'game_to_genre', foreignKey: 'genreId', onDelete: 'cascade'});

module.exports = {
    Genre,
    Game,
    Artwork,
    Cover,
    dbReset,
    dbSync,
    sequelize
};
