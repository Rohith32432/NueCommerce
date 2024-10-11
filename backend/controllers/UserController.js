const bcrypt = require('bcrypt');
const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    
    const hash = await bcrypt.hash(password.toString(), 10);
    const user = await User.create({ name, email, password: hash });
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const pwdMatch = await bcrypt.compare(password.toString(), user.password);
    if (!pwdMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token=jwt.sign({email:user.email},process.env.JWT_SECRET,{
      expiresIn:'1d'
    })

    res.json({ message: 'Login successful',token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { quant, uid, pid } = req.body;
    const cartItem = await Cart.create({
      quantity: quant||0,
      productId: pid,
      userId: uid,
    });
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const items = await Cart.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: Product
        },
      ],
      where: {
        userId: req.params.userId,
      },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { userid, email, name, pwd } = req.body;

  try {
    const user = await User.findOne({ where: { id: userid, email: email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.name = name||user.name;
    user.email=email||user.email
    if (pwd) {
      user.password = await bcrypt.hash(pwd, 10);
    }

    await user.save();
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

const deleteUser = async (req, res) => {
  const { userid } = req.params;

  try {
    const user = await User.findOne({ where: { id: userid } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};

async function profile(req, res) {
  const user = req.user;

  try {
      if (!user) {
          return res.status(404).json({ error: 'User not found.' });
      }

      const data = await User.findOne({ email: user.email });
      
      if (!data) {
          return res.status(404).json({ error: 'Profile not found.' });
      }

      res.status(200).json(data); // Return user data or relevant information
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred.' });
  }
}
async function updateCart(req, res) {
  const { id, quant } = req.body;
  try {
    await Cart.update(
      { quantity: quant },
      {
        where: {
          userId: id
        }
      }
    );
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error });
  }
}
async function deleteCart(req, res) {
  const id  = req.params.userId;
  console.log(id);
  
  try {
    await Cart.destroy({
      where: {
        id: id
      }
    });
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart', error });
  }
}

async function search(req, res) {
  const { name } = req.query;
  console.log(name);
  
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
}


module.exports = {
  registerUser,
  loginUser,
  addToCart,
  getCartItems,
  update,
  deleteUser,
  profile,
  updateCart,
  deleteCart,
  search
};
