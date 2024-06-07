const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('artwork', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        width: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
