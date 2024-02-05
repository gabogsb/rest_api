import { Router } from 'express';
import multer from 'multer';

import path from 'node:path';



import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});


//List Categories
router.get('/categories', listCategories);

//Create Category
router.post('/categories', createCategory);

//List Products
router.get('/products', listProducts);

//Create Product
router.post('/products', upload.single('image'), createProduct);

//Get Products By Category
router.get('/categories/:categoryId/products', listProductsByCategory);

//List Orders
router.get('/orders', async (req, res) => {
  res.send('OK');
});

//Change Order Status
router.patch('/orders/:orderId', async (req, res) => {
  res.send('OK');
});

//Delete/Cancel Order
router.delete('/orders/:orderId', async (req, res) => {
  res.send('OK');
});
