const express = require('express');
const Product = require('../models/product');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const offset = (parseInt(req.query.page) - 1) * limit || 0;

  Product.getAll(limit, offset, (err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
});

router.post('/', auth, (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  Product.create(name, description, price, imageUrl, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('Product created successfully');
  });
});

// Implement other product routes: getById, update, delete

module.exports = router;
