//DATABASE AND PROTOCOLS

const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env['DB_HOST'],
  user: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_SCHEMA'],
  dateStrings: 'TIMESTAMP'
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.', err);
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.', err);
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.', err);
    }
  }
  if (connection) {
    connection.release();
    console.log("Database connection successful");
  }
});

module.exports = pool;
