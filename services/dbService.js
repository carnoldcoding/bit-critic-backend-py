const { Sequelize } = require('sequelize');
const { dbClient } = require('../config.js');
const GenreModel = require("../models/genre");

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

const dropTable = async (table) => {
    try {
        await table.drop();
        console.log('Genre table has been dropped successfully.');
    } catch (error) {
        console.error('Error dropping genre table:', error);
    }
}


//Test Connection
testConnection();

// Define models
const Genre = GenreModel(sequelize);

dropTable(Genre);

// Sync models with the database (optional)
sequelize.sync();

module.exports = {
    Genre
};
