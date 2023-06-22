import express from 'express';
import { create, findAll, findById, findByUser, remove, update } from '../controller/documentosController.js';

export const documentosRoutes = express.Router();

documentosRoutes.get('/', findAll);
documentosRoutes.get('/:id', findById);
documentosRoutes.get('/user/:id', findByUser);
documentosRoutes.post('/', create);
documentosRoutes.patch('/:id', update);
documentosRoutes.delete('/:id', remove);