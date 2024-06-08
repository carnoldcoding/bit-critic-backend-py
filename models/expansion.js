const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('expansion', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'game',
                key: 'id'
            }
        }
    });
};
