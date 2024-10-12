const express = require('express');
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/OrderController');

const router = express.Router();

// Create a new order
router.get('/:id', getAllOrders);
router.post('/', createOrder);

// Get all orders

// Get order by ID
// router.get('/:id', getOrderById);

// Update an order
router.put('/:id', updateOrder);

// Delete an order
router.delete('/:id', deleteOrder);

module.exports = router;
