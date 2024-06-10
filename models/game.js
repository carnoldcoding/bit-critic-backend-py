const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cover_id: {
            type: DataTypes.INTEGER
        },
        slug: {
            type: DataTypes.STRING
        },
        storyline: {
            type: DataTypes.TEXT
        },
        summary: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.FLOAT
        },
        rating_count: {
            type: DataTypes.INTEGER
        },
        igdb_rating: {
            type: DataTypes.FLOAT
        },
        igdb_rating_count: {
            type: DataTypes.INTEGER
        },
        external_rating: {
            type: DataTypes.FLOAT,
        },
        external_rating_count: {
            type: DataTypes.INTEGER
        },
        franchise_id: {
            type: DataTypes.INTEGER
        }
    });
};
