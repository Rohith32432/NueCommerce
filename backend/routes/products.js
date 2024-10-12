const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  filter,
  getcategory,
} = require('../controllers/ProductsController'); 
const multer=require('multer')
const path=require('path')

const router = express.Router();
const upload=multer({dest:'./uploads'})

router.post('/',upload.single('pimg') ,createProduct);                 
router.get('/', getAllProducts);                    
router.get('/:id', getProductById);                 
router.put('/:id', updateProduct);                 
router.delete('/:id', deleteProduct);              
router.get('/uid/category',getcategory)
router.post('/filter',filter)
module.exports = router;
