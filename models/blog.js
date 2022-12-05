'use strict'
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        text: DataTypes.TEXT
    }, {})
    Blog.associate = function(models) {
    // associations can be defined here
    }
    return Blog
}
