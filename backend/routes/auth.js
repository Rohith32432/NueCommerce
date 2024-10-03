const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  User.register(username, email, password, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).send('User registered successfully');
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, user) => {
    if (err || !user) return res.status(404).send('User not found');
    if (!bcrypt.compareSync(password, user.password_hash)) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;
