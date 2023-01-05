import Product from '../models/Product.js';
import data from '../data.js';

export const getSeed = async (req, res, next) => {
   await Product.deleteMany({});
   const addedProducts = await Product.insertMany(data);
   res.status(201).json(addedProducts);
};

export const getProducts = async (req, res, next) => {
   try {
      const products = await Product.find();
      res.status(200).json(products);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};

export const getProduct = async (req, res, next) => {
   const slug = req.params.slug;
   try {
      const product = await Product.find({ slug: slug });
      res.status(200).json(product);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};

export const getHeadphones = async (req, res, next) => {
   try {
      const headphones = await Product.find()
         .where('category')
         .equals('headphones');
      res.status(200).json(headphones);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};

export const getEarphones = async (req, res, next) => {
   try {
      const earphones = await Product.find()
         .where('category')
         .equals('earphones');
      res.status(200).json(earphones);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};

export const getSpeakers = async (req, res, next) => {
   try {
      const speakers = await Product.find()
         .where('category')
         .equals('speakers');
      res.status(200).json(speakers);
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};
