import express from "express";

import { create, findAll, update, del, findById, findByUser, findProfile } from '../controller/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

export const profileRoutes = express.Router();

profileRoutes.get("/", findAll);
// profileRoutes.get("/:id", authMiddleware.verifyToken, findById);
profileRoutes.get("/:id", findById);
profileRoutes.get("/find/search", findProfile);
profileRoutes.get("/user/:userId", findByUser);
profileRoutes.post("/", create);
profileRoutes.patch("/:id", update);
profileRoutes.delete("/:id", del);