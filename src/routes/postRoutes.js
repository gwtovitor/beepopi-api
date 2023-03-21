import express from 'express';
import { create, findAll, findByUser } from '../controller/postController.js';

export const postRoutes = express.Router();

postRoutes.get("/", findAll);
postRoutes.get("/posts", findByUser);
postRoutes.post("/", create);