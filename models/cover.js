const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('cover', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.INTEGER 
        },
        height: {
            type: DataTypes.INTEGER
        },
        width: {
            type: DataTypes.INTEGER
        },
        image_id: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    });
};
