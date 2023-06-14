import express from 'express';
import { create, findAll, findById, findByUser, remove, update } from '../controller/vertController.js';

export const vertRoutes = express.Router();

vertRoutes.get('/', findAll);
vertRoutes.get('/:id', findById);
vertRoutes.get('/user/:id', findByUser);
vertRoutes.post('/', create);
vertRoutes.patch('/', update);
vertRoutes.delete('/:id', remove);