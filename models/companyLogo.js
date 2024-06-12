const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('company_logo', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        alpha_channel: {
            type: DataTypes.BOOLEAN
        },
        animated: {
            type: DataTypes.BOOLEAN
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
