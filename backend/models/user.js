const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  register: (username, email, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    db.query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (error, results) => {
        if (error) return callback(error);
        callback(null, results);
      }
    );
  },
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) return callback(error);
      callback(null, results[0]);
    });
  },
};

module.exports = User;
