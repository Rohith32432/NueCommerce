const express = require('express');
const {
  registerUser,
  loginUser,
  addToCart,
  getCartItems,
  profile,
  deleteCart,
  search,
} = require('../controllers/UserController');  
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/addtocart', addToCart);
router.get('/cart/:userId', getCartItems);  
router.get('/profile',auth, profile);  
router.delete('/cart/:userId', deleteCart);  
router.get('/search',search)
module.exports = router;
