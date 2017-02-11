const pg = require('pg');
const Sequelize = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dynasty';

module.exports = new Sequelize(connectionString);