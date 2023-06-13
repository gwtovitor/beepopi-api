import express from 'express';
import { getFeed } from '../controller/feedController.js';

export const feedRoutes = express.Router();

feedRoutes.get('/:id', getFeed);