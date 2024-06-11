const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('company', {
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
        changed_company_id: {
            type: DataTypes.INTEGER,
        },
        country_code: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT
        },
        logo_id: {
            type: DataTypes.INTEGER
        },
        parent_company_id: {
            type: DataTypes.INTEGER
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING
        },
        updated_at: {
            type: DataTypes.DATE
        }
    });
};
