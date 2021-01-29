import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc.... Fetch all products
//@route ... Get/api/products
// @access ....public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});
//@desc.... Fetch single products
//@route ... Get/api/products/:id
// @access ....public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});
//@desc.... delete products
//@route ... DELETE /api/products/:id
// @access ....private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, deleteProduct };
