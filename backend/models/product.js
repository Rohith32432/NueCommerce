const db = require('../config/db');

const Product = {
  getAll: (limit, offset, callback) => {
    db.query('SELECT * FROM products LIMIT ? OFFSET ?', [limit, offset], callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
      if (error) return callback(error);
      callback(null, results[0]);
    });
  },
  create: (name, description, price, imageUrl, callback) => {
    db.query(
      'INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)',
      [name, description, price, imageUrl],
      callback
    );
  },
  update: (id, name, description, price, imageUrl, callback) => {
    db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, image_url = ? WHERE id = ?',
      [name, description, price, imageUrl, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  },
};

module.exports = Product;
