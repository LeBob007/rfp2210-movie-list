const mysql = require('mysql2');

const newConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie'
});

newConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!')
});

module.exports = newConnection;