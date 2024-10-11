const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract the token
//   console.log(token);

  if (!token) return res.status(403).send('Token is required.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded?.email;

    if (!email) {
      return res.status(403).send('Invalid token. Email not found.');
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message);
    return res.status(403).send('Invalid token.');
  }
};

module.exports = auth;
