import express from 'express';

import {
   getEarphones,
   getHeadphones,
   getProduct,
   getProducts,
   getSeed,
   getSpeakers,
} from '../controllers/shop.js';

const router = express.Router();

router.put('/', getSeed);

router.get('/products', getProducts);

router.get('/product/:slug', getProduct);

router.get('/headphones', getHeadphones);

router.get('/earphones', getEarphones);

router.get('/speakers', getSpeakers);

export default router;
