import express from 'express';
import { create, del, findAll, findById, findByUser, update } from '../controller/postController.js';
import { upload } from '../controller/uploadController.js';

export const postRoutes = express.Router();

postRoutes.get("/", findAll);
postRoutes.get("/:id", findById);
postRoutes.get("/profile/:id", findByUser);
postRoutes.post("/", create);
postRoutes.patch("/:id", update);
postRoutes.delete("/:id", del);
// postRoutes.post("/upload", upload);