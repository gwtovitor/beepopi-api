import express from 'express';
import { findAll, findByProfile, findById, create, update, remove } from '../controller/comentarioController.js';

export const comentarioRoutes = express.Router();

comentarioRoutes.get('/', findAll);
comentarioRoutes.get('/:id', findById);
comentarioRoutes.get('/profile/:id', findByProfile);
comentarioRoutes.post('/', create);
comentarioRoutes.patch('/:id', update);
comentarioRoutes.delete('/:id', remove);