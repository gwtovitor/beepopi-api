import express from 'express';

import { create, del, findAll, update } from '../controller/payMethodController.js';

export const payMethodRoutes = express.Router();

payMethodRoutes.get('/', findAll);
payMethodRoutes.post('/', create);
payMethodRoutes.patch('/:id', update);
payMethodRoutes.delete('/:id', del);