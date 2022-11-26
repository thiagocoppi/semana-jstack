import { Router } from 'express';
import { errorHandler } from './app/exceptions/ErrorHandler';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import asyncHandler from 'express-async-handler';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import multer from 'multer';
import path from 'node:path';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', asyncHandler(listCategories));

router.post('/categories', asyncHandler(createCategory));

router.get('/products', asyncHandler(listProducts));

router.post('/products', upload.single('image'),  asyncHandler(createProduct));

router.get('/categories/:categoryId/products', asyncHandler(listProductsByCategory));

router.get('/orders', asyncHandler(listOrders));
router.post('/orders', asyncHandler(createOrder));

router.patch('/orders/:orderId', asyncHandler(changeOrderStatus));

router.delete('/orders/:orderId', asyncHandler(cancelOrder));

router.use(errorHandler);
