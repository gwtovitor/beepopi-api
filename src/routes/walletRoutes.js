import express from 'express';

import { create, findAll } from '../controller/walletController.js';

export const walletRoutes = express.Router();

walletRoutes.get('/', findAll);
walletRoutes.post('/', create);
walletRoutes.patch('/:id', findAll);
walletRoutes.delete('/:id', findAll);