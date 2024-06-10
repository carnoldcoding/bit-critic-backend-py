const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('franchise', {
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
        slug: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.STRING,
        }
    });
};
