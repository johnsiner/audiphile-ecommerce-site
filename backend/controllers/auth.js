import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signup = async (req, res, next) => {
   const errors = validationResult(req);
   try {
      if (!errors.isEmpty()) {
         const error = new Error('Validation failed');
         error.statusCode = 422;
         error.data = errors.array();
         throw error;
      }
      const email = req.body.email;
      const password = req.body.password;
      const hashedPasword = bcrypt.hashSync(password, 12);
      const user = new User({ email, password: hashedPasword });
      const result = await user.save();
      const token = jwt.sign(
         {
            email: user.email,
            userId: user._id.toString(),
         },
         process.env.JWT_SECRET,
         { expiresIn: '3hr' }
      );
      const expiresIn = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
      res.status(201).json({
         message: 'User created',
         userId: result._id,
         token,
         expiresIn,
      });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};

export const login = async (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;
   try {
      const user = await User.findOne({ email });
      if (!user) {
         const error = new Error('Email adress does not exist');
         error.statusCode = 401;
         throw error;
      }
      const isEqual = bcrypt.compareSync(password, user.password);
      if (!isEqual) {
         const error = new Error('Password incorrect');
         error.statusCode = 401;
         throw error;
      }
      const token = jwt.sign(
         {
            email: user.email,
            userId: user._id.toString(),
         },
         process.env.JWT_SECRET,
         { expiresIn: '3hr' }
      );
      const expiresIn = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
      res.status(200).json({ token, userId: user._id, expiresIn });
   } catch (err) {
      if (!err.statusCode) {
         err.statusCode = 500;
      }
      next(err);
   }
};
