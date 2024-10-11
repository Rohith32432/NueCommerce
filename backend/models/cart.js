const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Product = require('./product');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  sequelize,
  modelName: 'Cart',
});

// Define foreign key relationships
// In User model
User.hasMany(Cart, { foreignKey: 'userId' });

// In Cart model
Cart.belongsTo(User, { foreignKey: 'userId' });

// In Product model
Product.hasMany(Cart, { foreignKey: 'productId' });

// In Cart model
Cart.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Cart;

