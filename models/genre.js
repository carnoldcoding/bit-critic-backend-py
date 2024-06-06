const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('genre', {
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
            type: DataTypes.TEXT,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
        }
    );
};
