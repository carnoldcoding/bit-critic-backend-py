const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('game_to_company', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        developer: {
            type: DataTypes.BOOLEAN
        },
        porting: {
            type: DataTypes.BOOLEAN
        },
        publishing: {
            type: DataTypes.BOOLEAN
        },
        supporting: {
            type: DataTypes.BOOLEAN
        },

    });
};
