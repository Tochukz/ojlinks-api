const Sequelize = require('sequelize');
const config = require('config');

const {name, host, port, dialect, user, pass} = config.get('db');
const sequelize = new Sequelize(name, user, pass, {host, dialect});

module.exports = sequelize;