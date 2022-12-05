'use strict'
module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('Email', {
        name: DataTypes.STRING,
        subject: DataTypes.STRING,
        message: DataTypes.TEXT
    }, {})
    Email.associate = function(models) {
    // associations can be defined here
    }
    return Email
}
