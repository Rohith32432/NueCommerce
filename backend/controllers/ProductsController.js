const Product = require('../models/product');
const path = require('path')
const fs = require('fs');
const { findAll } = require('../models/user');
const { Op } = require('sequelize');

const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const imageUrl = req.imageUrl || req.file.originalname
        const product = await Product.create({ name, description, price, stock, imageUrl });

        fs.rename(`uploads/${req.file.filename}`, `uploads/${req.file.originalname}`, (err) => {
            if (err) throw err
        })
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, imageUrl } = req.body;

    try {
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.imageUrl = imageUrl || product.imageUrl;

        await product.save();
        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
async function getcategory(req,res) {
    // res.json('ji')
    
    try {
        const products = await Product.findAll({
           attributes:['category'],
           group:['category']
        });
       res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(404).json(error)
    }
}

async function filter(req,res) {
    const { category, limit } = req.body;  

    try {
        const filteredData = await Product.findAll({
            where: {
                [Op.and]: [
                    category ? { category } : {}, // Only include if category is provided
                    limit ? { price: { [Op.lte]: limit } } : {} // Filter price limit
                ]
            }
        });

        res.status(200).json(filteredData)
        // return filteredData; 
    } catch (error) {
       res.status(404).json('message',error)
        
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    filter,
    getcategory
};
